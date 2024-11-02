import { TABLE_NAME, URL_BD } from '../../utils';

export const getUsers = () => {
	return fetch(`${URL_BD}/${TABLE_NAME.USERS}`)
		.then(loadUsers => loadUsers.json());
};
