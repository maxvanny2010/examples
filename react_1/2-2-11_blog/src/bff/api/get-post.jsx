import { TABLE_NAME, URL_BD } from '../../utils';
import { dtoPost } from '../dto';

export const getPost = async (postId) => {
	return fetch(`${URL_BD}/${TABLE_NAME.POSTS}/${postId}`)
		.then(loadedPost => loadedPost.json())
		.then((loadedPost) => loadedPost && dtoPost(loadedPost));
};

