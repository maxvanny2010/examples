import { fetchLogin } from '../api';

export const login = async (user) => {
	try {
		const successUser = await fetchLogin(user);
		return {
			error: null,
			res: successUser,
		};
	} catch (error) {
		return {
			error: error,
			res: null,
		};
	}
};
