import { sessions } from '../sessions.jsx';
import { ROLE } from '../constants';
import { deleteUser } from '../api';

export const removeUser = async ([session, userId]) => {
	if (!sessions.access(session, [ROLE.ADMIN])) {
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
