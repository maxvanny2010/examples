import { FETCH_GROUPS_FAILURE, FETCH_GROUPS_REQUEST, FETCH_GROUPS_SUCCESS, GroupsActionTypes } from '../types';
import { GroupContactsDto } from '../../types/dto';

export interface GroupState {
	data: GroupContactsDto[];
	loading: boolean;
	error: string | null;
}

const initialState: GroupState = {
	data: [],
	loading: false,
	error: null,
};


export const groupsReducer = (
	state = initialState,
	action: GroupsActionTypes,
): GroupState => {
	switch (action.type) {
		case FETCH_GROUPS_REQUEST:
			return { ...state, loading: true, error: null };
		case FETCH_GROUPS_SUCCESS:
			return { ...state, loading: false, data: action.payload };
		case FETCH_GROUPS_FAILURE:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
