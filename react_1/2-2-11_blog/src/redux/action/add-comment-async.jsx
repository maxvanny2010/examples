import { setPostCommentData } from './set-post-comment-data.jsx';

export const addCommentAsync = (serverRequest, userId, postId, content) => (dispatch) => {
	serverRequest('addPostComment', userId, postId, content).then(postData => {
		dispatch(setPostCommentData(postData.res));
	});
};
