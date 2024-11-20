import { removeQuestion } from './remove-question.jsx';
import { removeQuestionTest } from '../../bff/operations/index.jsx';

export const removeQuestionAsync = (id) => (dispatch) => {
	removeQuestionTest(id).then((dataTest) => {
		if (dataTest.res) dispatch(removeQuestion(id));
	});
};
