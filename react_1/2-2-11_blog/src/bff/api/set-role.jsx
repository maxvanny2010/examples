import { REQUEST, TABLE_NAME, URL_BD } from '../../utils';


export const setRole = (userId, roleId) => {
	return fetch(`${URL_BD}/${TABLE_NAME.USERS}/${userId}`,
		{
			method: REQUEST.PATCH,
			headers: { 'Content-Type': 'application/json;charset=UTF-8' },
			body: JSON.stringify(
				{
					role_id: roleId,
				},
			),
		}).then(res => res.json());
};
