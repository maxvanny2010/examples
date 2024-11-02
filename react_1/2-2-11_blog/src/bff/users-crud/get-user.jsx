import { TABLE_NAME, URL_BD } from '../../utils';

export const getUser = async (loginToFind) => {
	const input = `${URL_BD}/${TABLE_NAME.USERS}?login=${loginToFind}`;
	return fetch(input)
		.then(loadedUser => loadedUser.json())
		.then(([loadedUser]) => loadedUser);
};

