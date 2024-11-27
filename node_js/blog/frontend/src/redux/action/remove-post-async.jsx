import { PATH, METHOD, requests, proxy } from '../../utils';

export const removePostAsync = (id) => () => {
	return requests(`${proxy}${PATH.POSTS}/${id}`, METHOD.DELETE);
};
