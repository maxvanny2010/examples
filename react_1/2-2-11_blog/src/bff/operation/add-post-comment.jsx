import { getPostCommentsWithAuthor } from '../utils';
import { sessions } from '../sessions.jsx';
import { ROLE } from '../constants';
import { addComment } from '../api';

export const addPostComment = async (hash, userId, postId, content) => {
	const access = await sessions.access(hash, [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER]);
	if (!access) {
		return {
			error: 'Access denied',
			res: null,
		};
	}
	await addComment(userId, postId, content);
	const commentsWithAuthor = await getPostCommentsWithAuthor(postId);
	return {
		error: null,
		res: commentsWithAuthor,
	};
};
