import { addUser, getUser, sessions } from '../index.jsx';

export const server = {
	async logout(session) {
		await sessions.delete(session);
	},
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);
		if (!user) {
			return {
				error: 'The login doesn\'t match our records',
				res: null,
			};
		}
		if (authPassword !== user.password) {
			return {
				error: 'The password is incorrect',
				res: null,
			};
		}
		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				role_id: user.role_id,
				session: sessions.create(user),
			},
		};
	},
	async register(regLogin, regPassword) {
		const user = await getUser(regLogin);
		if (user) {
			return {
				error: 'This login is busy',
				res: null,
			};
		}
		await addUser(regLogin, regPassword);

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				role_id: user.role_id,
				session: sessions.create(user),
			},
		};
	},
};
