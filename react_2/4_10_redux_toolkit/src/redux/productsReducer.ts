import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialProducts } from '../initialProducts';
import { IProduct } from '../types/IProduct';

export const productsSlice = createSlice({
	name: 'products',
	initialState: initialProducts,
	reducers: {
		increaseQuantity(state, action: PayloadAction<IProduct['id']>) {
			const product = state.find(p => p.id === action.payload);

			if (product) {
				product.quantity += 1;
			}
		},
		decreaseQuantity(state, action: PayloadAction<IProduct['id']>) {
			const product = state.find(p => p.id === action.payload);

			if (product && product.quantity > 0) {
				product.quantity -= 1;
			}
		},
	},
});

export const { increaseQuantity, decreaseQuantity } = productsSlice.actions;
