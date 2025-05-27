import { ContactsActionTypes, FETCH_CONTACTS_FAILURE, FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCCESS } from '../types';
import { ContactDto } from '../../types/dto';

export interface ContactsState {
	data: ContactDto[];
	loading: boolean;
	error: string | null;
}

const initialState: ContactsState = {
	data: [],
	loading: false,
	error: null,
};

export const contactsReducer = (
	state = initialState,
	action: ContactsActionTypes,
): ContactsState => {
	switch (action.type) {
		case FETCH_CONTACTS_REQUEST:
			return { ...state, loading: true, error: null };

		case FETCH_CONTACTS_SUCCESS:
			const newData = action.payload;
			if (state.data.length === newData.length &&
				state.data.every((c, i) => c.id === newData[i].id)) {
				return { ...state, loading: false };
			}
			return { ...state, loading: false, data: newData };

		case FETCH_CONTACTS_FAILURE:
			return { ...state, loading: false, error: action.payload };

		default:
			return state;
	}
};

