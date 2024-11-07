import { REQUEST, TABLE_NAME, URL_BD } from '../../utils';

export const addSession = async (hash, user) => {
	await fetch(`${URL_BD}/${TABLE_NAME.SESSIONS}`, {
		method: REQUEST.POST,
		headers: { 'Content-Type': 'application/json;charset=UTF-8' },
		body: JSON.stringify({ hash, user }),
	}).then(newSession => {
		newSession.json();
	});
};
