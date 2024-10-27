import { TYPE } from '../constants/TYPE.jsx';

const initialState = false;

export const IsGameEndReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.GAME_END_TRUE:
			return true;
		case TYPE.GAME_END_FALSE:
			return false;
		default:
			return state;
	}
};
