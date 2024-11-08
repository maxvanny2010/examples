import { setPostData } from './set-post-data.jsx';

export const savePostAsync = (serverRequest, newPostData) => (dispatch) => {
	return serverRequest('savePost', newPostData).then((updatePost) => {
		dispatch(setPostData(updatePost.res));
	});
};

