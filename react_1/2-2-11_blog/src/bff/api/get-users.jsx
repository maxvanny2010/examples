import { TABLE_NAME, URL_BD } from '../../utils';
import { dtoUser } from '../dto';

export const getUsers = () => {
	return fetch(`${URL_BD}/${TABLE_NAME.USERS}`)
		.then(loadUsers => loadUsers.json())
		.then(users => Array.isArray(users) ? users.map(dtoUser) : []);
};
