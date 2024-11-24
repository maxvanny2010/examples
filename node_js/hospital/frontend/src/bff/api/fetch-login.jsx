import { ERROR, PAGE, REQUEST, URL } from '../../constants';

export const fetchLogin = async (user) => {
	const path = `${URL}${PAGE.LOGIN}`;
	const response = await fetch(path,
		{
			method: REQUEST.POST,
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
			},
			body: JSON.stringify(user),
		});
	if (!response.ok) {
		throw new Error(`${ERROR.RECORDS_NOT_FOUND}`);
	}
	return response.json();
};
