import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Widget } from './types';
import { RootState } from './stores';
import axios from 'axios';

// Async thunk
export const getWidgets = createAsyncThunk<Widget[], void>(
	'widgets/getWidgets',
	async () => {
		const response = await axios.get<Widget[]>('/widget');
		return response.data;
	},
);
export const saveWidget = createAsyncThunk<void, Widget>(
	'widgets/saveWidget',
	async (widget, { dispatch }) => {
		await axios.post('/widget', widget);
		dispatch(createWidget(widget));
	},
);

interface WidgetsState {
	items: Widget[];
	loading: boolean;
	error: string | null;
}

const initialState: WidgetsState = {
	items: [],
	loading: false,
	error: null,
};

const widgetsSlice = createSlice({
	name: 'widgets',
	initialState,
	reducers: {
		createWidget(state, action: PayloadAction<Widget>) {
			state.items.push(action.payload);
		},
		updateWidget(state, action: PayloadAction<Widget>) {
			const index = state.items.findIndex(w => w.id === action.payload.id);
			if (index !== -1) {
				state.items[index] = action.payload;
			}
		},
		removeWidget(state, action: PayloadAction<string>) {
			state.items = state.items.filter(w => w.id !== action.payload);
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getWidgets.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getWidgets.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(getWidgets.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'Failed to load widgets';
			});
	},
});

export const { createWidget, updateWidget, removeWidget } = widgetsSlice.actions;

export const selectWidgets = (state: RootState) => state.widgets;

export default widgetsSlice.reducer;
