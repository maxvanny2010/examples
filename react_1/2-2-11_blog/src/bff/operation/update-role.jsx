import { setRole } from '../api';
import { sessions } from '../index.jsx';
import { ROLE } from '../constants';

export const updateRole = async ([session, userId, newUserRoleId]) => {
	if (!sessions.access(session, [ROLE.ADMIN])) {
		return {
			error: 'Access denied',
			res: null,
		};
	}
	await setRole(userId, newUserRoleId);

	return {
		error: null,
		res: true,
	};
};
