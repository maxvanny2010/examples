import { updateQuestion } from './update-question.jsx';
import { saveQuestion } from '../../bff/operations/index.jsx';

export const updateQuestionAsync = (id, question) => (dispatch) => {
	saveQuestion(id, question).then((dataTest) => {
		if (dataTest.res) dispatch(updateQuestion(dataTest.res));
	});
};
