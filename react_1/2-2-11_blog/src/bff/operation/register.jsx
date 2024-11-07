import { sessions } from '../sessions.jsx';
import { addUser, getUser } from '../api';

export const register = async (regLogin, regPassword) => {
	const existUser = await getUser(regLogin);
	if (existUser) {
		return {
			error: 'This login is busy',
			res: null,
		};
	}
	const user = await addUser(regLogin, regPassword);

	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
			role_id: user.role_id,
			session: await sessions.create(user),
		},
	};
};
