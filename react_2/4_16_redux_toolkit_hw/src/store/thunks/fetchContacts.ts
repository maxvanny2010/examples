import { Dispatch } from 'redux';
import { ContactsActionTypes, FETCH_CONTACTS_FAILURE, FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCCESS } from '../types';
import { DATA_CONTACT } from '../../__data__';
import { ContactDto } from '../../types/dto';


export const fetchContacts = () => {
	return async (dispatch: Dispatch<ContactsActionTypes>) => {
		try {
			dispatch({ type: FETCH_CONTACTS_REQUEST });

			await new Promise((res) => setTimeout(res, 1000));

			dispatch({
				type: FETCH_CONTACTS_SUCCESS,
				payload: DATA_CONTACT as ContactDto[],
			});
		} catch (error) {
			dispatch({
				type: FETCH_CONTACTS_FAILURE,
				payload: 'Couldn\'t fetch contact details',
			});
		}
	};
};
