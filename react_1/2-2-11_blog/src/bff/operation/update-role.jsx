import { setRole } from '../api';
import { sessions } from '../index.jsx';
import { ROLE } from '../constants';

export const updateRole = async ([hash, userId, newUserRoleId]) => {
	const access = await sessions.access(hash, [ROLE.ADMIN]);
	if (!access) {
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
