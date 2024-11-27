import { METHOD, PATH, proxy, requests } from '../../utils';

export const removePostAsync = (id) => () => {
	return requests(`${proxy}${PATH.POSTS}/${id}`, METHOD.DELETE);
};
