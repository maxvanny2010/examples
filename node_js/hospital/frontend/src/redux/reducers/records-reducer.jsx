import { ACTION_TYPE } from '../../constants';

const initRecordState = {
	records: [],
	page: 0,
	totalPages: 0,
	totalRecords: 0,
};
export const recordsReducer = (state = initRecordState, action) => {

	switch (action.type) {
		case ACTION_TYPE.SET_TABLE_RECORDS: {
			const {
				records,
				page,
				totalPages,
				totalRecords,
			} = action.payload;
			return {
				...state,
				records: records || [],
				page: page || 0,
				totalPages: totalPages || 0,
				totalRecords: totalRecords || 0,
			};
		}
		default:
			return state;
	}
};
