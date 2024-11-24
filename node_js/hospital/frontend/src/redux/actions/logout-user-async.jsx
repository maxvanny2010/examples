import { logout } from '../../bff/operations';
import { logoutUser } from './logout-user.jsx';

export const logoutUserAsync = () => (dispatch) => {
	return logout().then((result) => {
		if (result.res) dispatch(logoutUser());
		return result;
	});
};
