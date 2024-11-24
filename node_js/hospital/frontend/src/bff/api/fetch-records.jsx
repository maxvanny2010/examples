import { ERROR, FIELDS, PAGE, REQUEST, URL } from '../../constants';

export const fetchRecords = async (request) => {
	const { page, limit, field, sort, search } = request;
	const path = `${URL}${PAGE.RECORDS}`;
	const params = new URLSearchParams();
	if (page !== undefined) params.append(FIELDS.PAGE, page);
	if (limit !== undefined) params.append(FIELDS.LIMIT, limit);
	if (field !== undefined) params.append(FIELDS.FIELD, field);
	if (sort !== undefined) params.append(FIELDS.SORT, sort);
	if (search !== undefined) params.append(FIELDS.SEARCH, search);
	const url = `${path}?${params.toString()}`;
	try {
		const response = await fetch(url, {
			method: REQUEST.GET,
			credentials: 'include',
		});
		if (!response.ok) {
			const error = response.status === 404
				? ERROR.PAGE_NOT_EXIT
				: ERROR.SOMETHING_HAPPENED_TRY_AGAIN_LATE;
			return Promise.reject(error);
		}
		return response.json();
	} catch (error) {
		console.error(error);
		throw error;
	}
};
