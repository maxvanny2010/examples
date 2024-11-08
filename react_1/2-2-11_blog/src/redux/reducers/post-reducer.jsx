import { ACTION_TYPE } from '../../utils';

const initialPostState = {
	id: '',
	title: '',
	imageUrl: '',
	content: '',
	publishedAt: '',
	userId: '',
	comments: [],
};
export const postReducer = (state = initialPostState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_POST_DATA:
			return {
				...state,
				...action.payload,
			};
		case ACTION_TYPE.SET_POST_COMMENT_DATA:
		case ACTION_TYPE.POST_COMMENT_REMOVE:
			return {
				...state,
				comments: action.payload,
			};
		case ACTION_TYPE.RESET_POST_DATA:
			return initialPostState;
		default:
			return state;
	}
};
