import { ACTION_TYPE, METHOD, PATH, proxy, requests } from '../../utils';

export const logout = () => async (dispatch) => {
	return await requests(`${proxy}${PATH.LOGOUT}`, METHOD.POST).then(() => {
			dispatch({ type: ACTION_TYPE.LOGOUT });
		},
	);
};
