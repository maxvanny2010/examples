import { removeQuestionAnswer } from '../../bff/operations/index.jsx';
import { removeAnswer } from './remove-answer.jsx';

export const removeAnswerAsync = (id, optionId) => (dispatch) => {
	removeQuestionAnswer(id, optionId).then((dataTest) => {
		if (dataTest.res) dispatch(removeAnswer(id, optionId));
	});
};
