import { ContactDto } from '../../types/dto';

export const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';

interface FetchContactsRequestAction {
	type: typeof FETCH_CONTACTS_REQUEST;
}

interface FetchContactsSuccessAction {
	type: typeof FETCH_CONTACTS_SUCCESS;
	payload: ContactDto[];
}

interface FetchContactsFailureAction {
	type: typeof FETCH_CONTACTS_FAILURE;
	payload: string;
}

export type ContactsActionTypes =
	| FetchContactsRequestAction
	| FetchContactsSuccessAction
	| FetchContactsFailureAction;
