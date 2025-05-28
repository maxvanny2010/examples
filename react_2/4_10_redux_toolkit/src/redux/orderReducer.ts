import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	confirmed: false,
};

export const createOrder = createAsyncThunk(
	'createOrder',
	async () => {
		const res = await fetch('https://mocki.io/v1/e5625e4c-11e9-462e-92c4-56f72b5a8de1');
		const data: { success: boolean } = await res.json();

		if (!data.success) {
			throw new Error('Something goes wrong');
		}
	},
);

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		resetOrder() {
			return initialState;
		},
	},
	extraReducers(builder) {
		builder.addMatcher(
			createOrder.pending.match,
			() => {
				return {
					loading: true,
					confirmed: false,
				};
			},
		);

		builder.addMatcher(
			createOrder.fulfilled.match,
			() => {
				return {
					loading: false,
					confirmed: true,
				};
			},
		);

		builder.addMatcher(
			createOrder.rejected.match,
			() => {
				return {
					loading: false,
					confirmed: false,
				};
			},
		);
	},
});

export const { resetOrder } = orderSlice.actions;
