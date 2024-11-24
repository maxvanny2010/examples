import { fetchInitUser } from '../api';

export const initUser = async () => {
	try {
		const newUser = await fetchInitUser();
		return { error: null, res: newUser };
	} catch (error) {
		return { error: error, res: null };
	}
};
