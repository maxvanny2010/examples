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
			const favoritesSet = new Set(state.data);
			if (favoritesSet.has(id)) {
				favoritesSet.delete(id);
			} else {
				favoritesSet.add(id);
			}

			state.data = Array.from(favoritesSet);
		}

	},
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;