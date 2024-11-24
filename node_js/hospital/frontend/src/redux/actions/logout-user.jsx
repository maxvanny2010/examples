import { ACTION_TYPE } from '../../constants';

export const logoutUser = () => {
	return { type: ACTION_TYPE.LOGOUT_USER };
};
