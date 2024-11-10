import { addSession, deleteSession, getSession } from './api';

export const sessions = {
	async create(user) {
		/*const hash = Math.random().toString(36).substr(2);*/
		const hash = Math.random().toFixed(50);
		await addSession(hash, user);
		return hash;
	},
	async delete(hash) {
		const session = await getSession(hash);
		if (!session) return;
		await deleteSession(session.id);
	},
	async access(hash, accessRoles) {
		const session = await getSession(hash);
		return !!session?.user && accessRoles.includes(session.user.roleId);
	},
};
