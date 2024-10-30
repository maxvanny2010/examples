import { TYPE } from '../constants/TYPE.jsx';

const initialState = {
	errors: [],
};

export const errorReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.DUPLICATE:
			return { ...state, errors: [...state.errors, action.payload] };
		case TYPE.NO_ERROR:
			return { ...state, errors: initialState.errors };
		default:
			return state;
	}
};
