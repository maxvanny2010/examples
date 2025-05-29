import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { round } from '../utils';
import { productsApiSlice } from './productsReducer';

export const selectQuantities = (state: RootState) => state.quantities;


const selectProductsResult = productsApiSlice.endpoints.getProducts.select();
const selectProducts = createSelector(
	(state: RootState) => selectProductsResult(state)?.data,
	(data) => data ?? [],
);
export const selectTotal = createSelector(
	[selectQuantities, selectProducts],
	(quantities, products) => {
		if (!products) {
			return { subtotal: 0, tax: 0, total: 0 };
		}

		const subtotal = products.reduce((acc, product) => {
			return acc + product.price * (quantities[product.id] || 0);
		}, 0);
		const tax = subtotal * 0.13;
		const total = subtotal + tax;

		return {
			subtotal: round(subtotal),
			tax: round(tax),
			total: round(total),
		};
	},
);