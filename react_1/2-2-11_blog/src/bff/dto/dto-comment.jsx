export const dtoComment = (dbComment) => ({
	id: dbComment.id,
	postId: dbComment.post_id,
	userId: dbComment.author_id,
	content: dbComment.content,
	registeredAt: dbComment.registered_at,
});
