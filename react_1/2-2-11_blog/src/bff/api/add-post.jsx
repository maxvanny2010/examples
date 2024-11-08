import { REQUEST, TABLE_NAME, URL_BD } from '../../utils';
import { generateDate } from '../utils';


export const addPost = ({ imageUrl, title, content }) => {
	return fetch(`${URL_BD}/${TABLE_NAME.POSTS}`, {
		method: REQUEST.POST,
		headers: { 'Content-Type': 'application/json;charset=UTF-8' },
		body: JSON.stringify(
			{
				image_url: imageUrl,
				title,
				published_at: generateDate(),
				content,
			},
		),
	}).then(createdPost => createdPost.json());
};
