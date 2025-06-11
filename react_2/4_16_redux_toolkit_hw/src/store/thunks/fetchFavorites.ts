import {
	FavoritesActionTypes,
	FETCH_FAVORITES_FAILURE,
	FETCH_FAVORITES_REQUEST,
	FETCH_FAVORITES_SUCCESS,
	TOGGLE_FAVORITE,
} from '../types';
import { Dispatch } from 'redux';
import { FavoriteContactsDto } from '../../types/dto';

export const fetchFavorites = () => {
	return (dispatch: Dispatch<FavoritesActionTypes>) => {
		dispatch({ type: FETCH_FAVORITES_REQUEST });

		try {
			const raw = localStorage.getItem('favorites');
			const data: FavoriteContactsDto = raw ? JSON.parse(raw) : [];

			dispatch({
				type: FETCH_FAVORITES_SUCCESS,
				payload: data,
			});
		} catch {
			dispatch({
				type: FETCH_FAVORITES_FAILURE,
				payload: 'Mistake loading favorites',
			});
		}
	};
};

export const toggleFavorite = (id: string) => {
	return (dispatch: Dispatch<FavoritesActionTypes>, getState: () => any) => {
		dispatch({ type: TOGGLE_FAVORITE, payload: id });

		const updated = getState().favorites.data as string[];
		localStorage.setItem('favorites', JSON.stringify(updated));
	};
};
