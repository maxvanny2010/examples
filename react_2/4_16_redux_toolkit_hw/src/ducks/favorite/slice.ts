import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteContactsDto } from '../../types/dto';

export interface FavoritesState {
	data: FavoriteContactsDto;
}

const initialState: FavoritesState = {
	data: [],
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorite(state, action: PayloadAction<string>) {
			const id = action.payload;
			const index = state.data.indexOf(id);
			if (index !== -1) {
				state.data.splice(index, 1);
			} else {
				state.data.push(id);
			}
		},
	},
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;