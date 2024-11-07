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
			return {
				...state,
				comments: action.payload,
			};
		default:
			return state;
	}
};
