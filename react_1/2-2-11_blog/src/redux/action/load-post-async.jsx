import { setPostData } from './set-post-data.jsx';

export const loadPostAsync = (serverRequest, postId) => (dispatch) => {
	return serverRequest('fetchPost', postId).then(postData => {
		if (postData.res) dispatch(setPostData(postData.res));
		return postData;
	});
};
