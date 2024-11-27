import { METHOD } from '../constants/requests/METHOD.jsx';
import { PAGINATION_LIMIT } from '../constants/data/pagination-limit.jsx';

export function requests(url, method, data, params) {
	if (params) {
		params = { ...params, limit: params.limit || PAGINATION_LIMIT };
	}
	let queryString = '';
	if (params) {
		queryString = `?${new URLSearchParams(params).toString()}`;
	}
	return fetch(`${url}${queryString}`, {
		headers: { 'content-type': 'application/json' },
		credentials: 'include',
		method: method || METHOD.GET,
		body: data ? JSON.stringify(data) : undefined,
	}).then(res => res.json());
}
