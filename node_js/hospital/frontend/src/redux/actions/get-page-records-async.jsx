import { getPageRecords } from '../../bff/operations';
import { setRecords } from './set-records.jsx';

export const getPageRecordsAsync = (request) => (dispatch) => {
	return getPageRecords(request).then((result) => {
		if (result.res) dispatch(setRecords(result.res));
		return result;
	});
};
