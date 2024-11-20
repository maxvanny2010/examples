import { PAGE, REQUEST, URL } from '../../utils';

export const deleteAnswer = (id, optionId) => {
	return fetch(`${URL}/${PAGE.EDIT}/${id}`,
		{
			method: REQUEST.PUT,
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			body: JSON.stringify({ optionId: optionId }),
		}).then(res => res.json());
};
