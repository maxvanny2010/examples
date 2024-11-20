import { PAGE, REQUEST, URL } from '../../utils/';

export const addAnswer = async (id) => {
	return fetch(`${URL}/${PAGE.EDIT}`,
		{
			method: REQUEST.PATCH,
			headers: { 'Content-Type': 'application/json;charset=UTF-8' },
			body: JSON.stringify({ id }),
		}).then(res => res.json());
};
