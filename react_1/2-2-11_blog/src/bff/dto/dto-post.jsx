export const dtoPost = (dbPost) => ({
	id: dbPost.id,
	userId: dbPost.user_id,
	title: dbPost.title,
	content: dbPost.content,
	imageUrl: dbPost.image_url,
	publishedAt: dbPost.published_at,
});
