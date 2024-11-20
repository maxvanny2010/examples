import { HISTORY } from '../constants/history/history.jsx';

export const getDataFromStoreSession = () => {
	return JSON.parse(sessionStorage.getItem(HISTORY.STORAGE_NAME));
};
