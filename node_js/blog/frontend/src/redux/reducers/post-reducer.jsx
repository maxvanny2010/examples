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
		case ACTION_TYPE.COMMENTS_SET:
			return {
				...state,
				comments: action.payload,
			};
		case ACTION_TYPE.COMMENT_ADD: {
			const { comment } = action.payload;
			return {
				...state,
				comments: comment ? [...state.comments, comment] : state.comments,
			};
		}
		case ACTION_TYPE.COMMENT_REMOVE: {
			const { commentId } = action.payload;
			return {
				...state,
				comments: state.comments.filter((comment) => comment.id !== commentId),
			};
		}
		case ACTION_TYPE.RESET_POST_DATA:
			return initialPostState;
		default:
			return state;
	}
};
