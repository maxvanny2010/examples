import { Dispatch } from 'redux';
import { DATA_GROUP_CONTACT } from '../../__data__';
import { GroupContactsDto } from '../../types/dto';
import { FETCH_GROUPS_FAILURE, FETCH_GROUPS_REQUEST, FETCH_GROUPS_SUCCESS, GroupsActionTypes } from '../types';


export const fetchGroups = () => {
	return async (dispatch: Dispatch<GroupsActionTypes>) => {
		try {
			dispatch({ type: FETCH_GROUPS_REQUEST });

			await new Promise((res) => setTimeout(res, 1000));

			dispatch({
				type: FETCH_GROUPS_SUCCESS,
				payload: DATA_GROUP_CONTACT as GroupContactsDto[],
			});
		} catch (error) {
			dispatch({
				type: FETCH_GROUPS_FAILURE,
				payload: 'Could not load group contacts',
			});
		}
	};
};
