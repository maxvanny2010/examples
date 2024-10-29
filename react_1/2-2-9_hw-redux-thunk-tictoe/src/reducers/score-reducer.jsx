import { PLAYER } from '../constants/PLAYER.jsx';

const initialState = {
	X: 0,
	O: 0,
};

export const ScoreReducer = (state = initialState, action) => {
	switch (action.type) {
		case PLAYER.X:
			return { ...state, O: state.O + 1 };
		case PLAYER.O:
			return { ...state, X: state.X + 1 };
		default:
			return state;
	}
};
