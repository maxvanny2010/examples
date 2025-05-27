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
		case FETCH_FAVORITES_SUCCESS:
			return { ...state, loading: false, data: action.payload };
		case FETCH_FAVORITES_FAILURE:
			return { ...state, loading: false, error: action.payload };
		case TOGGLE_FAVORITE:
			const id = action.payload;
			const alreadyExists = state.data.includes(id);
			return {
				...state,
				data: alreadyExists
					? state.data.filter((fid) => fid !== id)
					: [...state.data, id],
			};
		default:
			return state;
	}
};
