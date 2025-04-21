import axios from 'axios';
import { ERROR, URL_API } from '../constants';

export const fetchOne = async (tableName, id, callback) => {
	const URL = `${URL_API}${tableName}/${id}`;
	try {
		const res = await axios.get(URL);
		return callback(res.data);
	} catch (error) {
		console.error(ERROR.FETCH_PAGE, error);
		return null;
	}
};
