import { ACTION_TYPE, ROLE } from '../../utils/index.jsx';

const initialUserState = {
	id: null,
	login: null,
	session: null,
	roleId: ROLE.GUEST,
};
export const userReducer = (state = initialUserState, action) => {
	/*console.log("user state:", state);*/
	switch (action.type) {
		case ACTION_TYPE.SET_USER:
			return {
				...state,
				...action.payload,
			};
		case ACTION_TYPE.LOGOUT:
			return initialUserState;
		default:
			return state;
	}
};
