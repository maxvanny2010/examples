import { REQUEST, TABLE_NAME, URL_BD } from '../../utils';

export const deleteUser = (userId) => {
	return fetch(`${URL_BD}/${TABLE_NAME.USERS}/${userId}`,
		{
			method: REQUEST.DELETE,
		});
};
