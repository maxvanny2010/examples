import { REQUEST, TABLE_NAME, URL_BD } from '../../utils';


export const updatePost = ({ id, imageUrl, title, content }) => {
	return fetch(`${URL_BD}/${TABLE_NAME.POSTS}/${id}`, {
		method: REQUEST.PATCH,
		headers: { 'Content-Type': 'application/json;charset=UTF-8' },
		body: JSON.stringify(
			{
				image_url: imageUrl,
				title,
				content,
			},
		),
	}).then(updatePost => updatePost.json());
};
