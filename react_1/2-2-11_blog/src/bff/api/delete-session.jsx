import { REQUEST, TABLE_NAME, URL_BD } from '../../utils';

export const deleteSession = async (id) => {
	return fetch(`${URL_BD}/${TABLE_NAME.SESSIONS}/${id}`, {
		method: REQUEST.DELETE,
	});
};
