import { TYPE } from '../constants/TYPE.jsx';

const initialState = false;

export const IsDrawReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.DRAW_TRUE:
			return true;
		case TYPE.DRAW_FALSE:
			return false;
		default:
			return state;
	}
};
