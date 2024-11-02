import { ACTION_TYPE } from '../../utils/index.jsx';

const initialAppState = {
	isLogout: false,
};
export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				isLogout: !state.isLogout,

			};
		default:
			return state;
	}
};
