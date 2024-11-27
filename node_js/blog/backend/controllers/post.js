const Post = require('../models/Post');

// add
async function addPost(post) {

	const newPost = await Post.create(post);
	await Post.findById(newPost._id).populate({
		path: 'comments',
		populate: 'author',
	});
	return newPost;

}

// delete
async function deletePost(id) {
	return Post.deleteOne({ _id: id });
}

// edit
async function updatePost(id, post) {
	const updatedPost = await Post.findOneAndUpdate({ _id: id }, post, { returnDocument: 'after' });
	await updatedPost.populate({
		path: 'comments',
		populate: 'author',
	});
	return updatedPost;
}

// get all with pagination and search
async function getPosts(search = '', limit = 6, page = 1) {
	const [posts, count] =
		await Promise.all([
			Post.find({ title: { $regex: search, $options: 'i' } })
				.limit(limit)
				.skip((page - 1) * limit)
				.sort({ createdAt: -1 }),
			Post.countDocuments({ title: { $regex: search, $options: 'i' } }),
		]);
	return {
		posts,
		lastPage: Math.ceil(count / limit),
	};
}

// get one item
async function getPost(id) {
	return Post.findById(id).populate({
		path: 'comments',
		populate: 'author',
	});
}

module.exports = {
	deletePost,
	updatePost,
	getPosts,
	getPost,
	addPost,
};