import { REQUEST, TABLE_NAME, URL_BD } from '../../utils';
import { generateDate } from '../utils';


export const addComment = (userId, postId, content) => {
	return fetch(`${URL_BD}/${TABLE_NAME.COMMENTS}`, {
		method: REQUEST.POST,
		headers: { 'Content-Type': 'application/json;charset=UTF-8' },
		body: JSON.stringify(
			{
				post_id: postId,
				author_id: userId,
				published_at: generateDate(),
				content,
			},
		),
	}).then(res => res.json());
};
