import { ACTION_TYPE } from '../../constants';

export const setRecords = (response) => {
	return {
		type: ACTION_TYPE.SET_TABLE_RECORDS,
		payload: response,
	};
};
