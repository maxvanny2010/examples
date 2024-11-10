import { TABLE_NAME, URL_BD } from '../../utils';
import { ERROR } from '../constants';
import { dtoPost } from '../dto';

export const getPost = async (postId) => {
	return fetch(`${URL_BD}/${TABLE_NAME.POSTS}/${postId}`)
		.then(res => {
			if (res.ok) return res;
			const error = res.status === 404
				? ERROR.PAGE_NOT_EXIT
				: ERROR.SOMETHING_HAPPENED_TRY_AGAIN_LATE;
			return Promise.reject(error);
		})
		.then(loadedPost => loadedPost.json())
		.then((loadedPost) => loadedPost && dtoPost(loadedPost));
};

