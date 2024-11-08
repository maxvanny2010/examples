import { sessions } from '../index.jsx';
import { ROLE } from '../constants';
import { addPost, updatePost } from '../api';

export const savePost = async ([hash, newPostData]) => {
	const access = await sessions.access(hash, [ROLE.ADMIN]);
	if (!access) {
		return {
			error: 'Access denied',
			res: null,
		};
	}
	const savedPost = newPostData.id === ''
		? await addPost(newPostData)
		: await updatePost(newPostData);
	return {
		error: null,
		res: savedPost,
	};
};
