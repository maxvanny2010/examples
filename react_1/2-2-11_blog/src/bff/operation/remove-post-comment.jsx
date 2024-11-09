import { sessions } from '../sessions.jsx';
import { ROLE } from '../constants';
import { deleteComment, getComments } from '../api';

export const removePostComment = async (hash, postId, id) => {
	const access = await sessions.access(hash, [ROLE.ADMIN, ROLE.MODERATOR]);
	if (!access) {
		return {
			error: 'Access denied',
			res: null,
		};
	}
	await deleteComment(id);
	const comments = await getComments(postId);
	return {
		error: null,
		res: comments,
	};
};
