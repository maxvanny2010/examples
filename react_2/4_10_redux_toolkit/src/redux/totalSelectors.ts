import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { round } from '../utils';

export const selectProducts = (state: RootState) => state.products;

export const selectTotal = createSelector([selectProducts], (products) => {
	const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
	const tax = subtotal * 0.13;
	const total = subtotal + tax;

	return {
		subtotal: round(subtotal),
		tax: round(tax),
		total: round(total),
	};
});
