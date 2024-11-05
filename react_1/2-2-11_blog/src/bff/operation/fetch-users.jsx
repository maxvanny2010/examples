import { getUsers } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const fetchUsers = async (userSession) => {
	if (!sessions.access(userSession, [ROLE.ADMIN])) {
		return {
			error: 'Access denied',
			res: null,
		};
	}
	const users = await getUsers();

	return {
		error: null,
		res: users,
	};
};
