import { addNewQuestion } from '../../bff/operations/index.jsx';
import { addStubQuestion } from './add-stub-question.jsx';

export const addQuestionAsync = () => (dispatch) => {
	addNewQuestion().then((dataTest) => {
		if (dataTest.res) dispatch(addStubQuestion(dataTest.res));
	});
};
