import { sessions } from '../index.jsx';
import { ROLE } from '../constants';
import { updatePost } from '../api';

export const savePost = async ([hash, newPostData]) => {
	const access = await sessions.access(hash, [ROLE.ADMIN]);
	if (!access) {
		return {
			error: 'Access denied',
			res: null,
		};
	}
	const updatedPost = await updatePost(newPostData);
	return {
		error: null,
		res: updatedPost,
	};
};
