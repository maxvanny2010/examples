import { sessions } from '../sessions.jsx';

export const logout = async (hash) => {
	await sessions.delete(hash);
};
