import { ERROR, PAGE, REQUEST, URL } from '../../constants';

export const fetchInitUser = async () => {
	const path = `${URL}${PAGE.USER}`;
	const response = await fetch(path,
		{ method: REQUEST.GET });
	if (!response.ok) {
		throw new Error(`${ERROR.REQUEST_FAILED}}`);
	}
	return response.json();
};
