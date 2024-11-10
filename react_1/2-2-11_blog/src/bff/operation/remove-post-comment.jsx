import { getPostCommentsWithAuthor } from '../utils';
import { sessions } from '../sessions.jsx';
import { deleteComment } from '../api';
import { ROLE } from '../constants';

export const removePostComment = async (hash, postId, id) => {
	const access = await sessions.access(hash, [ROLE.ADMIN, ROLE.MODERATOR]);
	if (!access) {
		return {
			error: 'Access denied',
			res: null,
		};
	}
	await deleteComment(id);
	const commentsWithAuthor = await getPostCommentsWithAuthor(postId);
	return {
		error: null,
		res: commentsWithAuthor,
	};
};
