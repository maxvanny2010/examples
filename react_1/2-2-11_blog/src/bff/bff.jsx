import { getUser } from './get-user.jsx';
import { addUser } from './add-user.jsx';
import { createSession } from './create-session.jsx';

export const server = {

	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'There is no user with login',
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
			res: createSession(user.role_id),

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
			res: createSession(user.role_id),
		};
	},
};
