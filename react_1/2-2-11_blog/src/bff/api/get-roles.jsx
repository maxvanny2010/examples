import { TABLE_NAME, URL_BD } from '../../utils';

export const getRoles = async () => {
	return fetch(`${URL_BD}/${TABLE_NAME.ROLES}`)
		.then(loadedUser => loadedUser.json());
};

