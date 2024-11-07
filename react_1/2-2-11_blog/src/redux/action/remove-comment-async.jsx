import { removeComment } from './remove-comment.jsx';

export const removeCommentAsync = (serverRequest, postId, id) => (dispatch) => {
	serverRequest('removePostComment', postId, id).then((postData) => {
		dispatch(removeComment(postData.res));
	});
};
