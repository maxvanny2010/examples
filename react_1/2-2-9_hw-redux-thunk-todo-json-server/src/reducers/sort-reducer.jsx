import { TYPE } from '../constants/TYPE.jsx';

const initialState = {
	sort: false,
};

export const sortReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.SORT:
			return { ...state, sort: !state.sort };
		default:
			return state;
	}
};
