import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApiSlice = createApi({
	reducerPath: 'orderApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
	endpoints(build) {
		return {
			createOrder: build.mutation<{ success: boolean }, void>({
				query: () => ({ url: '/4140c78b-96d6-4688-b297-32cb7d939568' }),
			}),
		};
	},
});

export const { useCreateOrderMutation } = orderApiSlice;
