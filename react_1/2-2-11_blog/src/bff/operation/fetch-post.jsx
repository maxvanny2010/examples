import { getPostCommentsWithAuthor } from '../utils';
import { getPost } from '../api';

export const fetchPost = async (postId) => {
	let post;
	let error;
	try {
		post = await getPost(postId);
	} catch (postError) {
		error = postError;
	}
	if (error) {
		return {
			error,
			res: null,
		};
	}
	const commentsWithAuthor = await getPostCommentsWithAuthor(postId);
	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAuthor,
		},
	};
};
