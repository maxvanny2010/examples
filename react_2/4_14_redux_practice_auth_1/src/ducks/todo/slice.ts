import { isSuccessResponse, Response, Response as AppResponse } from '../../types/response';
import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { refresh } from '../auth';
import { RootState } from '../store';
import { ITodo } from '../../types/todo';

/**
 * timeout for fetch (cover fetchBaseQuery)
 */
const fetchBaseQueryWithTimeout = (
	baseUrl: string,
	timeout = 10000 // default: 10s
) => {
	const rawBaseQuery = fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers, api) => {
			const state = api.getState() as RootState;
			if (state.auth.accessToken) {
				headers.set('authorization', `Bearer ${state.auth.accessToken}`);
			}
			headers.set('Content-Type', 'application/json');
			return headers;
		},
	});

	return async (args: FetchArgs, api: BaseQueryApi, extraOptions: any) => {
		const abortController = new AbortController();

		const timeoutId = setTimeout(() => {
			abortController.abort();
		}, timeout);

		try {
			return await rawBaseQuery(
				{ ...args, signal: abortController.signal },
				api,
				extraOptions
			);
		} catch (err: any) {
			if (err.name === 'AbortError') {
				return {
					error: {
						status: 'TIMEOUT_ERROR',
						message: 'Request timed out after 10s',
					},
				};
			}
			return {
				error: {
					status: 'FETCH_ERROR',
					message: err.message,
				},
			};
		} finally {
			clearTimeout(timeoutId);
		}
	};
};

/**
 * a cover with automatic update token and retries
 */
const retryWithRefresh = retry(
	async (args, api, extraOptions) => {
		const baseQuery = fetchBaseQueryWithTimeout('http://localhost:3142/todos');

		const result = await baseQuery(args, api, extraOptions);

		if (result?.error?.status === 403) {
			await api.dispatch(refresh());
		}

		return result;
	},
	{ maxRetries: 1 }
);

export const todoSlice = createApi({
	reducerPath: 'todo',
	baseQuery: retryWithRefresh,
	tagTypes: ['todos'],
	endpoints: builder => ({
		getTodos: builder.query<AppResponse<ITodo[]>, void>({
			query() {
				return {
					url: '/',
				};
			},
			providesTags: ['todos'],
		}),
		createTodo: builder.mutation<Response<ITodo>, ITodo['title']>({
			query: (title) => ({
				url: '/',
				method: 'POST',
				body: { title },
			}),
			async onQueryStarted(title, { dispatch, queryFulfilled }) {
				const tempId = Date.now().toString();
				// optimistic update:  add new todos before a server response
				const patchResult = dispatch(
					todoSlice.util.updateQueryData('getTodos', undefined, (draft) => {
						if (draft.success) {
							draft.data.push({
								id: tempId,
								title,
								completed: false,
							});
						}
					}),
				);

				try {
					const { data } = await queryFulfilled;

					// if response has format { success: false }, will do undo
					if (!isSuccessResponse(data)) {
						patchResult.undo();
						return;
					}
					// 2. replace a temporary id to a real id
					dispatch(
						todoSlice.util.updateQueryData('getTodos', undefined, (draft) => {
							if (draft.success) {
								const index = draft.data.findIndex((t) => t.id === tempId);
								if (index !== -1) {
									draft.data[index] = data.data; // replace full object
								}
							}
						}),
					);
				} catch (err) {
					// network or server break — undo too.
					patchResult.undo();
				}
			},
		}),
		editTodo: builder.mutation<Response<ITodo>, ITodo>({
			query(todo) {
				return {
					url: `/${todo.id}`,
					method: 'PATCH',
					body: todo,
				};
			},
			invalidatesTags: ['todos'],
		}),
		deleteTodo: builder.mutation<AppResponse<ITodo[]>, ITodo['id']>({
			query(todoId) {
				return {
					url: `/${todoId}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['todos'],
		}),
	}),
});
/**
onQueryStarted	hook for side effects и optimistic updates
apiSlice vs slice	apiSlice — for a server data, slice — for a local state
util.updateQueryData	method RTR for handle update cache**/

/**
 const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string }): BaseQueryFn => async ({ url, method, data }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        timeout: 10000, // ⏱ timeout
      });
      return { data: result.data };
    } catch (axiosError) {
      return {
        error: {
          status: axiosError.response?.status || 'CUSTOM_ERROR',
          data: axiosError.message,
        },
      };
    }
  };
 * **/