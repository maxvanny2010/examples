import { setPostData } from './set-post-data.jsx';
import { METHOD, PATH, proxy, requests } from '../../utils/';

export const savePostAsync = (id, newPostData) => (dispatch) => {
	const saveRequest = id
		? requests(`${proxy}${PATH.POSTS}/${id}`, METHOD.PATCH, newPostData)
		: requests(`${proxy}${PATH.POSTS}`, METHOD.POST, newPostData);

	return saveRequest.then(({ data: { post } }) => {
		dispatch(setPostData(post));
		return post;
	});
};

