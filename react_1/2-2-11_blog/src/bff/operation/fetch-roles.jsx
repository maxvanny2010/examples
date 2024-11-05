import { getRoles } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const fetchRoles = async (userSession) => {
	if (!sessions.access(userSession, [ROLE.ADMIN])) {
		return {
			error: 'Access denied',
			res: null,
		};
	}
	const roles = await getRoles();

	return {
		error: null,
		res: roles,
	};
};
