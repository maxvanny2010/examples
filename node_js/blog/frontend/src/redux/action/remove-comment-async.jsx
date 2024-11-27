import { removeComment } from './remove-comment.jsx';
import { METHOD, PATH, proxy, requests } from '../../utils';

export const removeCommentAsync = (postId, commentId) => (dispatch) => {
	let url = `${proxy}${PATH.POSTS}/${postId}${PATH.COMMENTS}/${commentId}`;
	requests(url, METHOD.DELETE).then(({ error }) => {
		if (!error) dispatch(removeComment({ commentId }));
	});
};
