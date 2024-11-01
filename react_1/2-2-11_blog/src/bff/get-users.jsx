import { URL_BD } from '../utils/index.jsx';

export const getUsers = () => {
	return fetch(URL_BD)
		.then(loadUsers => loadUsers.json());
};
