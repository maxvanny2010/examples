import { ACTION_TYPE } from '../../constants';

const initUserState = {
	user: {
		email: '',
	},
	isAuthenticated: false,
};
export const userReducer = (state = initUserState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGIN_USER: {
			return {
				...state,
				user: { email: action.payload },
				isAuthenticated: true,
			};
		}
		case ACTION_TYPE.LOGOUT_USER:
			return initUserState;
		default:
			return state;
	}
};
