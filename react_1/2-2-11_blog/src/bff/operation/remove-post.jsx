import { sessions } from '../sessions.jsx';
import { ROLE } from '../constants';
import { deleteComment, deletePost, getComments } from '../api';

export const removePost = async (hash, id) => {
	const access = await sessions.access(hash, [ROLE.ADMIN]);
	if (!access) {
		return {
			error: 'Access denied',
			res: null,
		};
	}
	await deletePost(id);
	const comments = await getComments(id);
	await Promise.all(comments.map(({ id: commentId }) => deleteComment(commentId)));
	return {
		error: null,
		res: true,
	};
};
