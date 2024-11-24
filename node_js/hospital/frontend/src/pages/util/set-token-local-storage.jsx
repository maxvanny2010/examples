import { STORE } from '../../constants';

export const setTokenToLocalStorage = ({ email, token }) => {
	localStorage.setItem(STORE.TOKEN, token);
	localStorage.setItem(STORE.EMAIL, email);
};
