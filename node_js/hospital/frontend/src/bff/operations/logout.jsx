import { fetchLogout } from '../api';

export const logout = async () => {
	try {
		const successLogout = await fetchLogout();
		return {
			error: null,
			res: successLogout,
		};
	} catch (error) {
		return {
			error: error,
			res: null,
		};
	}
};
