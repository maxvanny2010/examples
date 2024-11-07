import { REQUEST, TABLE_NAME, URL_BD } from '../../utils';

export const deleteComment = (id) => {
	return fetch(`${URL_BD}/${TABLE_NAME.COMMENTS}/${id}`,
		{
			method: REQUEST.DELETE,
		});
};
