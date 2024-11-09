import { TABLE_NAME, URL_BD } from '../../utils';
import { dtoPost } from '../dto';

export const getPosts = async (page, limit) => {
	return fetch(`${URL_BD}/${TABLE_NAME.POSTS}?_page=${page}&_limit=${limit}`)
		.then(loadedPosts =>
			Promise.all([
				loadedPosts.json(),
				loadedPosts.headers.get('X-Total-Count'),
			]),
		)
		.then(([posts, totalCount]) => {
			const totalPages = Math.ceil(Number(totalCount) / limit);
			return {
				posts: Array.isArray(posts) ? posts.map(dtoPost) : [],
				totalPages,
			};
		});
};

