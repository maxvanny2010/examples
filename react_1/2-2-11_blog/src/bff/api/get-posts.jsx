import { TABLE_NAME, URL_BD } from '../../utils';
import { dtoPost } from '../dto';


export const getPosts = async (searchPhrase, page, limit) => {
	const URL = `${URL_BD}/${TABLE_NAME.POSTS}`;
	const params = new URLSearchParams({
		title_like: searchPhrase,
		_page: page,
		_limit: limit,
	});
	const url = `${URL}?${params.toString()}`;
	return fetch(url)
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

