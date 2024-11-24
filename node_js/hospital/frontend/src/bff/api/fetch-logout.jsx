import { ERROR, PAGE, REQUEST, URL } from '../../constants';

export const fetchLogout = async () => {
	const path = `${URL}${PAGE.LOGOUT}`;
	const response = await fetch(path,
		{
			method: REQUEST.GET,
			credentials: 'include',
		});
	if (!response.ok) {
		throw new Error(`${ERROR.REQUEST_FAILED}`);
	}
	return response.json();
};
