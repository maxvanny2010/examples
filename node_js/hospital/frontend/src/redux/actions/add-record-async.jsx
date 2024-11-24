import { addNewRecord } from '../../bff/operations';

export const addRecordAsync = (record) => {
	return addNewRecord(record).then((result) => {
		if (result.res) return result;
	});
};
