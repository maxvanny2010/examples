import { TYPE } from '../constants/TYPE.jsx';

const initialState = {
	isLoading: false,
};
export const loadingReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.START_LOADING:
			return { ...state, isLoading: true };
		case TYPE.FINISH_LOADING:
			return { ...state, isLoading: false };
		default:
			return state;
	}
};
