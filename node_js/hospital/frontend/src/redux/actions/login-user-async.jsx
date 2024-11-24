import { loginUser } from './login-user.jsx';
import { login } from '../../bff/operations';

export const loginUserAsync = (user) => (dispatch) => {
	return login(user).then((result) => {
		if (result.res) dispatch(loginUser(result.res.email));
		return result;
	});
};
