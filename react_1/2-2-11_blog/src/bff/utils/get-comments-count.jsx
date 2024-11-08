export const getCommentsCount = (comments = [], postId) => {
	return comments.filter(({ postId: commentPostId }) =>
		commentPostId === postId,
	).length;
};
