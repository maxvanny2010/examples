import { ACTION_TYPE } from '../../utils';

export const setPostCommentData = (postData) => ({
	type: ACTION_TYPE.SET_POST_COMMENT_DATA,
	payload: postData,
});
