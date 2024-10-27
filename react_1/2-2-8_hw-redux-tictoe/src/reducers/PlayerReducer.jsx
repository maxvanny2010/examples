import { PLAYER } from '../constants/PLAYER.jsx';
import { TYPE } from '../constants/TYPE.jsx';

const initialState = '';

export const PlayerReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.SET_PLAYER:
			return action.payload === PLAYER.X ? PLAYER.O : PLAYER.X;
		default:
			return state;
	}
};
