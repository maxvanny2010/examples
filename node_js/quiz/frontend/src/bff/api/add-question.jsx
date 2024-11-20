import { PAGE, REQUEST, URL } from '../../utils';

export const addQuestion = async (id, question) => {
	return fetch(`${URL}/${PAGE.NEW}`,
		{
			method: REQUEST.PUT,
			headers: { 'Content-Type': 'application/json;charset=UTF-8' },
			body: JSON.stringify({ id: id, question: question }),
		}).then(res => res.json());
};
