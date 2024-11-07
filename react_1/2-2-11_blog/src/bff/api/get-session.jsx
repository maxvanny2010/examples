import { TABLE_NAME, URL_BD } from '../../utils';
import { dtoSession } from '../dto';

export const getSession = async (hash) => {
	return fetch(`${URL_BD}/${TABLE_NAME.SESSIONS}?hash=${encodeURIComponent(hash)}`)
		.then(response => response.json())
		.then(sessions => {
			return sessions[0] ? dtoSession(sessions[0]) : null;
		});
};

