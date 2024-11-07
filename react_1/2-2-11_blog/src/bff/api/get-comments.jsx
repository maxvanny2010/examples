import { TABLE_NAME, URL_BD } from '../../utils';
import { dtoComment } from '../dto';

export const getComments = async (postId) => {
	return fetch(`${URL_BD}/${TABLE_NAME.COMMENTS}?post_id=${postId}`)
		.then(loadedComments => loadedComments.json())
		.then(comments => Array.isArray(comments) ? comments.map(dtoComment) : []);
};

