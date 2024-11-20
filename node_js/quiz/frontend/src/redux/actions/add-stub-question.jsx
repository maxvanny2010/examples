import { ACTION_TYPE } from '../../utils/index.jsx';

export const addStubQuestion = (question) => {
	return {
		type: ACTION_TYPE.STUB_QUESTION,
		payload: question,
	};
};
