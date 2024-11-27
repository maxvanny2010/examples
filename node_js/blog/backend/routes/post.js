const { getPosts, getPost, addPost, updatePost, deletePost } = require('../controllers/post');
const authenticated = require('../middlewares/authenticated');
const { addComment, deleteComment } = require('../controllers/comment');
const dtoComment = require('../helper/dto/dtoComment');
const dtoPost = require('../helper/dto/dtoPost');
const hasRole = require('../middlewares/hasRole');

const { ADMIN, MODERATOR } = require('../constants/roles');
const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
	const { posts, lastPage } = await getPosts(
		req.query.search,
		req.query.limit,
		req.query.page,
	);
	return res.send({ data: { lastPage, posts: posts.map(dtoPost) } });
});
router.get('/:id', async (req, res) => {
	try {
		const post =
			await getPost(req.params.id);
		return res.send({ data: { post: dtoPost(post) } });
	} catch (err) {
		res.status(400).send({ error: 'Invalid parameter' });
	}
});

router.post('/', authenticated, hasRole([ADMIN]), async (req, res) => {
	const { newPostData } = req.body;
	const { title, content, imageUrl: image } = newPostData ? newPostData : req.body;
	const newPost = await addPost({ title, content, image });
	return res.send({ data: { post: dtoPost(newPost) } });
});
router.patch('/:id', authenticated, hasRole([ADMIN]), async (req, res) => {
	const { newPostData } = req.body;
	const { title, content, imageUrl: image } = newPostData ? newPostData : req.body;
	try {
		const newPost = await updatePost(req.params.id, {
			title, content, image,
		});
		return res.send({ data: { post: dtoPost(newPost) } });
	} catch (err) {
		res.status(400).send({ error: 'Invalid parameter' });
	}
});
router.delete('/:id', authenticated, hasRole([ADMIN]), async (req, res) => {
	try {
		await deletePost(req.params.id);
		return res.send({ error: null });
	} catch (err) {
		res.status(400).send({ error: 'Invalid parameter' });
	}
});
router.post('/:id/comments', authenticated, async (req, res) => {
	try {
		const newComment =
			await addComment(
				req.params.id,
				{
					content: req.body.content,
					author: req.user.id,
				});
		return res.send({ data: dtoComment(newComment) });
	} catch (error) {
		res.status(400).send({ error: 'Invalid parameter' });
	}
});
router.delete('/:postId/comments/:commentId', authenticated, hasRole([ADMIN, MODERATOR]), async (req, res) => {
	try {
		const { postId, commentId } = req.params;
		await deleteComment(postId, commentId);
		res.send({ error: null });
	} catch (error) {
		res.status(400).send({ error: 'Invalid parameters' });
	}
});

module.exports = router;
