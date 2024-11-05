import { authorize, fetchRoles, fetchUsers, logout, register, removeUser, updateRole } from './operation';

export const server = {
	authorize, register, logout, fetchRoles, fetchUsers, updateRole, removeUser,
};
