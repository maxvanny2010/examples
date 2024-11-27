import { PATH, METHOD, requests, proxy } from '../../utils';
import { addComment } from './add-comment.jsx';

export const addCommentAsync = (postId, content) => (dispatch) => {
	requests(`${proxy}${PATH.POSTS}/${postId}${PATH.COMMENTS}`,
		METHOD.POST, { content },
	).then((comment) => {
		dispatch(addComment({comment: comment.data}));
	});
};
