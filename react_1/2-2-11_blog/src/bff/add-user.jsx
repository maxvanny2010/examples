import { generateDate, REQUEST, TABLE_NAME, URL_BD } from '../utils/index.jsx';


export const addUser = (login, password) => {
	return fetch(`${URL_BD}/${TABLE_NAME.USERS}`, {
		method: REQUEST.POST,
		headers: { 'Content-Type': 'application/json;charset=UTF-8' },
		body: JSON.stringify(
			{
				login,
				password,
				registered_at: generateDate(),
				role_id: 3,
			},
		),
	});
};
