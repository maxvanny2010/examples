import { fetchRecords } from '../api';

export const getPageRecords = async (request) => {
	try {
		const records = await fetchRecords(request);
		return {
			error: null,
			res: records,
		};
	} catch (error) {
		return {
			error: error,
			res: null,
		};
	}
};
