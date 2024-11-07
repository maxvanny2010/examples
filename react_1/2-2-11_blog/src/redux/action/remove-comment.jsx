import { ACTION_TYPE } from '../../utils';

export const removeComment = (payload) => ({
	type: ACTION_TYPE.POST_COMMENT_REMOVE,
	payload,
});
