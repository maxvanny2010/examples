import { STORE } from '../../constants';

export const updateTokenEmailIfUpdatePage = () => {
	const token = localStorage.getItem(STORE.TOKEN);
	const email = localStorage.getItem(STORE.EMAIL);
	return { token, email };

};
