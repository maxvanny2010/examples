import { TYPE } from '../constants/TYPE.jsx';

const initialState = ['', '', '', '', '', '', '', '', ''];

export const FieldsReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.UPDATE_FIELDS:
			return action.payload;
		case TYPE.INIT_FIELDS:
			return initialState;
		default:
			return state;
	}
};
