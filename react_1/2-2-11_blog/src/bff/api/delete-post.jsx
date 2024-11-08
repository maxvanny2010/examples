import { REQUEST, TABLE_NAME, URL_BD } from '../../utils';

export const deletePost = (id) => {
	return fetch(`${URL_BD}/${TABLE_NAME.POSTS}/${id}`,
		{
			method: REQUEST.DELETE,
		});
};
