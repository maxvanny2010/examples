const mongoose = require('mongoose');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

// add
async function addComment(postId, comment) {
	if (!mongoose.Types.ObjectId.isValid(postId)) {
		throw new Error('Invalid parameters');
	}
	const newComment = await Comment.create(comment);
	await Post.findByIdAndUpdate(postId, { $push: { comments: newComment._id } });
	return Comment.findById(newComment._id).populate('author');
}

// delete
async function deleteComment(postId, commentId) {
	if (!mongoose.Types.ObjectId.isValid(postId) || !mongoose.Types.ObjectId.isValid(commentId)) {
		throw new Error('Invalid parameters');
	}
	await Comment.deleteOne({ _id: commentId });
	await Post.findByIdAndUpdate({ _id: postId }, { $pull: { comments: commentId } });
}

module.exports = { addComment, deleteComment };