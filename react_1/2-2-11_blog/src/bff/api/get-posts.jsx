import { TABLE_NAME, URL_BD } from '../../utils';
import { dtoPost } from '../dto';

export const getPosts = async () => {
	return fetch(`${URL_BD}/${TABLE_NAME.POSTS}`)
		.then(loadedPosts => loadedPosts.json())
		.then((posts) => Array.isArray(posts) ? posts.map(dtoPost) : []);
};

