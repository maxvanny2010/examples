import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../types/IProduct';

export const productsApisSlice = createApi({
	reducerPath: 'productsApis',
	baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
	endpoints: (builder) => ({
		getProductById: builder.query<IProduct, string>({
			query: (id) => `products/${id}`,
		}),
	}),
});

export const { useGetProductByIdQuery, useLazyGetProductByIdQuery } = productsApisSlice;
