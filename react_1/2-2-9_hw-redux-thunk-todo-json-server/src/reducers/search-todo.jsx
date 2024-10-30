import { TYPE } from '../constants/TYPE.jsx';

const initialState = {
	task: '',
};

export const searchTodoReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.SEARCH:
			return { ...state, task: action.payload };
		case TYPE.CLEAR_INPUT:
			return { ...state, task: initialState.task };
		default:
			return state;
	}
};
