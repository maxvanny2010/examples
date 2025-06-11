import { GroupContactsDto } from '../../types/dto';

export const FETCH_GROUPS_REQUEST = 'FETCH_GROUPS_REQUEST';
export const FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS';
export const FETCH_GROUPS_FAILURE = 'FETCH_GROUPS_FAILURE';

interface FetchGroupsRequestAction {
	type: typeof FETCH_GROUPS_REQUEST;
}

interface FetchGroupsSuccessAction {
	type: typeof FETCH_GROUPS_SUCCESS;
	payload: GroupContactsDto[];
}

interface FetchGroupsFailureAction {
	type: typeof FETCH_GROUPS_FAILURE;
	payload: string;
}

export type GroupsActionTypes =
	| FetchGroupsRequestAction
	| FetchGroupsSuccessAction
	| FetchGroupsFailureAction;
