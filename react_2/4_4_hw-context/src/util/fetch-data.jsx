import { ERROR, URL_BD } from '../constants';


export const fetchData = async (tableName, callback) => {
	const URL = `${URL_BD}/${tableName}`;
	try {
		const res = await fetch(URL);
		const items = await res.json();
		return {
			items: Array.isArray(items) ? items.map(callback) : [],
		};
	} catch (error) {
		console.error(ERROR.FETCH_PAGE, error);
		return { items: [] };
	}
};


