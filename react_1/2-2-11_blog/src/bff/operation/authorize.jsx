import { sessions } from '../sessions.jsx';
import { getUser } from '../api';

export const authorize = async (authLogin, authPassword) => {
	const user = await getUser(authLogin);
	if (!user) {
		return {
			error: 'The login doesn\'t match our records',
			res: null,
		};
	}
	const { id, login, password, roleId } = user;
	if (authPassword !== password) {
		return {
			error: 'The password is incorrect',
			res: null,
		};
	}
	return {
		error: null,
		res: {
			id,
			login,
			roleId,
			session: await sessions.create(user),
		},
	};
};
