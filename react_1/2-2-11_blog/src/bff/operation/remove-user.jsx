import { sessions } from '../sessions.jsx';
import { ROLE } from '../constants';
import { deleteUser } from '../api';

export const removeUser = async ([hash, userId]) => {
	const access = await sessions.access(hash, [ROLE.ADMIN]);
	if (!access) {
		return {
			error: 'Access denied',
			res: null,
		};
	}
	await deleteUser(userId);

	return {
		error: null,
		res: true,
	};
};
