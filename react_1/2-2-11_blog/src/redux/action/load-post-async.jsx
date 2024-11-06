import { setPostData } from './set-post-data.jsx';

export const loadPostAsync = (serverRequest, postId) => (dispatch) => {
	serverRequest('fetchPost', postId).then(postData => {
		dispatch(setPostData(postData.res));
	});
};
