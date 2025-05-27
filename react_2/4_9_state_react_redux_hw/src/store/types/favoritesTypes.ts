import { FavoriteContactsDto } from '../../types/dto';

export const FETCH_FAVORITES_REQUEST = 'FETCH_FAVORITES_REQUEST';
export const FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS';
export const FETCH_FAVORITES_FAILURE = 'FETCH_FAVORITES_FAILURE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

interface FetchFavoritesRequestAction {
	type: typeof FETCH_FAVORITES_REQUEST;
}

interface FetchFavoritesSuccessAction {
	type: typeof FETCH_FAVORITES_SUCCESS;
	payload: FavoriteContactsDto;
}

interface FetchFavoritesFailureAction {
	type: typeof FETCH_FAVORITES_FAILURE;
	payload: string;
}

interface ToggleFavoriteAction {
	type: typeof TOGGLE_FAVORITE;
	payload: string;
}

export type FavoritesActionTypes =
	| FetchFavoritesRequestAction
	| FetchFavoritesSuccessAction
	| FetchFavoritesFailureAction
	| ToggleFavoriteAction;
