import { addComment, getComments } from '../api';
import { sessions } from '../sessions.jsx';
import { ROLE } from '../constants';

export const addPostComment = async (hash, userId, postId, content) => {
	const access = await sessions.access(hash, [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER]);
	if (!access) {
		return {
			error: 'Access denied',
			res: null,
		};
	}
	await addComment(userId, postId, content);
	const comments = await getComments(postId);
	return {
		error: null,
		res: comments,
	};
};
