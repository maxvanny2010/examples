import { fetchNewRecord } from '../api';

export const addNewRecord = async (record) => {
	try {
		const newRecord = await fetchNewRecord(record);
		return {
			error: null,
			res: newRecord,
		};
	} catch (error) {
		return {
			error: error,
			res: null,
		};
	}


};
