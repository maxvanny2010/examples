export const dtoSession = (dbSession) => ({
	id: dbSession.id,
	hash: dbSession.hash,
	user: dbSession.user,
});
