import { TABLE_NAME, URL_BD } from '../../utils';
import { dtoComment } from '../dto';

const ALL_COMMENTS_URL = `${URL_BD}/${TABLE_NAME.COMMENTS}`;
const POST_COMMENTS_URL = `${ALL_COMMENTS_URL}?post_id=`;

export const getComments = async (postId) => {
	const url = postId === undefined ? ALL_COMMENTS_URL : POST_COMMENTS_URL + postId;

	return fetch(url)
		.then(loadedComments => loadedComments.json())
		.then(comments => Array.isArray(comments) ? comments.map(dtoComment) : []);
};

