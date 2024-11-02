import { ACTION_TYPE } from '../../utils';
import { server } from '../../bff';

export const logout = (session) => (dispatch) => {
	return server.logout(session).then(() => {
			dispatch({ type: ACTION_TYPE.LOGOUT });
		},
	);
};
