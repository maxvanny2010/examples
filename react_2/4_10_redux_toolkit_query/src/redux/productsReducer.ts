import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../types/IProduct';
import { orderApiSlice } from './orderReducer';

const initialState: Record<IProduct['id'], number> = {};

export const productsSlice = createSlice({
	name: 'quantities',
	initialState,
	reducers: {
		increaseQuantity(state, action: PayloadAction<IProduct['id']>) {
			if (state[action.payload]) {
				state[action.payload]++;
			} else {
				state[action.payload] = 1;
			}
		},
		decreaseQuantity(state, action: PayloadAction<IProduct['id']>) {
			if (state[action.payload] > 0) {
				state[action.payload]--;
			} else {
				state[action.payload] = 0;
			}
		},
	},
	extraReducers(builder) {
		builder.addMatcher(
			orderApiSlice.endpoints.createOrder.matchFulfilled,
			() => initialState,
		);
	},
});
type ProductSummary = Pick<IProduct, 'id' | 'name'>;
export const productsApiSlice = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
	endpoints: (builder) => ({
		getProducts: builder.query<IProduct[], void>({
			query: () => ({ url: '/024c9dc2-a301-4797-8059-edb316381c26' }),
		}),
		getProductSummary: builder.query<ProductSummary, string>({
			query: (id) => `products/${id}/summary`,
		}),
		/*
		 getProductById: builder.query<IProduct, string>({
         query: (id) => `products/${id}`,
          }),
	    */
	}),
});
/*
export const {
  useGetProductsQuery,  useGetProductByIdQuery,  useLazyGetProductByIdQuery,
} = productsApiSlice;
* */
export const { increaseQuantity, decreaseQuantity } = productsSlice.actions;

export const { useGetProductsQuery } = productsApiSlice;
