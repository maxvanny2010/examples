import { ACTION_TYPE } from '../../utils/index.jsx';

const initialTestState = { test: [] };

export const testReducer = (state = initialTestState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_TEST_DATA:
			return {
				...state,
				test: action.payload.test,
			};
		case ACTION_TYPE.STUB_QUESTION:
			return {
				...state,
				test: [action.payload, ...state.test],
			};
		case ACTION_TYPE.STUB_ANSWER:
			return {
				...state,
				test: state.test.map((question) => {
					if (question._id === action.payload._id) {
						return { ...question, ...action.payload };
					}
					return question;
				}),
			};
		case ACTION_TYPE.REMOVE_ANSWER: {
			return {
				...state,
				test: state.test.map((question) =>
					question._id === action.payload.id
						? {
							...question,
							options: question.options.filter(
								(option) => option._id !== action.payload.optionId,
							),
						}
						: question,
				),
			};
		}
		case ACTION_TYPE.REMOVE_QUESTION:
			return {
				...state,
				test: state.test.filter((question) => {
					return question._id !== action.payload.id;
				}),
			};
		case ACTION_TYPE.UPDATE_QUESTION:
			return {
				...state,
				test: state.test.map((question) => {
					return question._id === action.payload._id
						? { ...question, ...action.payload }
						: question;
				}),
			};
		default:
			return state;
	}
};
