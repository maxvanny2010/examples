import { setPostData } from './set-post-data.jsx';
import { PATH, requests, proxy } from '../../utils';

export const loadPostAsync = (postId) => (dispatch) => {
	return requests(`${proxy}${PATH.POSTS}/${postId}`).then((response) => {
		const { error } = response;
		if (error) {
			console.error('Error:', error);
			return error;
		}
		const { data: { post } } = response;
		if (post) dispatch(setPostData(post));
	});
};
