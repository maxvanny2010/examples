import { ACTION_TYPE } from '../../utils';
import { server } from '../../bff';

export const logout = (hash) => async (dispatch) => {
	return await server.logout(hash).then(() => {
			dispatch({ type: ACTION_TYPE.LOGOUT });
		},
	);
};
