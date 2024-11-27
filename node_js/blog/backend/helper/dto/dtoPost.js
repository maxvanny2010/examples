const mongoose = require('mongoose');
const dtoComment = require('./dtoComment');
module.exports = function(post) {
	return {
		id: post._id,
		title: post.title,
		imageUrl: post.image,
		content: post.content,
		comments: post.comments.map(comment =>
			mongoose.isObjectIdOrHexString(comment)
				? comment
				: dtoComment(comment),
		),
		publishedAt: post.createdAt,
	};
};