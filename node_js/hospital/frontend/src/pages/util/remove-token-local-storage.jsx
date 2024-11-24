import { STORE } from '../../constants';

export const removeTokenFromLocalStorage = () => {
	localStorage.removeItem(STORE.TOKEN);
	localStorage.removeItem(STORE.EMAIL);
};
