export const dtoComment = (dbComment) => ({
	id: dbComment.id,
	postId: dbComment.post_id,
	authorId: dbComment.author_id,
	content: dbComment.content,
	publishedAt: dbComment.published_at,
});
