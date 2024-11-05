export const dtoUser = (dbUser) => ({
	id: dbUser.id,
	login: dbUser.login,
	password: dbUser.password,
	registeredAt: dbUser.registered_at,
	roleId: dbUser.role_id,
});
