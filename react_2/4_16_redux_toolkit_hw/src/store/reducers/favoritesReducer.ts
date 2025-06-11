import {
	FavoritesActionTypes,
	FETCH_FAVORITES_FAILURE,
	FETCH_FAVORITES_REQUEST,
	FETCH_FAVORITES_SUCCESS,
	TOGGLE_FAVORITE,
} from '../types';
import { FavoriteContactsDto } from '../../types/dto';

export interface FavoritesState {
	data: FavoriteContactsDto;
	loading: boolean;
	error: string | null;
}

const initialState: FavoritesState = {
	data: [],
	loading: false,
	error: null,
};

export const favoritesReducer = (
	state = initialState,
	action: FavoritesActionTypes,
): FavoritesState => {
	switch (action.type) {
		case FETCH_FAVORITES_REQUEST:
			return { ...state, loading: true, error: null };

		case FETCH_FAVORITES_SUCCESS: {
			const newData = action.payload;
			if (state.data === newData) {
				return { ...state, loading: false };
			}

			if (
				state.data.length === newData.length &&
				state.data.every((id, i) => id === newData[i])
			) {
				return { ...state, loading: false };
			}

			return { ...state, loading: false, data: newData };
		}

		case FETCH_FAVORITES_FAILURE:
			return { ...state, loading: false, error: action.payload };

		case TOGGLE_FAVORITE: {
			const id = action.payload;
			const alreadyExists = state.data.includes(id);
			let newData: FavoriteContactsDto;

			if (alreadyExists) {
				newData = state.data.filter((fid) => fid !== id);
			} else {
				newData = [...state.data, id];
			}
			if (
				newData.length === state.data.length &&
				newData.every((fid, i) => fid === state.data[i])
			) {
				return state;
			}

			return { ...state, data: newData };
		}

		default:
			return state;
	}
};

