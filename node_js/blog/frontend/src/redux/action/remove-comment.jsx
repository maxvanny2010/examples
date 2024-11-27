import { ACTION_TYPE } from '../../utils';

export const removeComment = (commentId) => ({
	type: ACTION_TYPE.COMMENT_REMOVE,
	payload: commentId,
});
