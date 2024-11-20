import { ACTION_TYPE } from '../../utils/index.jsx';

export const addAnswer = (question) => {
	return {
		type: ACTION_TYPE.STUB_ANSWER,
		payload: question,
	};
};
