import { ACTION_TYPE } from '../../constants';

export const loginUser = (email) => {
	return {
		type: ACTION_TYPE.LOGIN_USER,
		payload: email,
	};
};
