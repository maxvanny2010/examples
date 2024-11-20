import { addNewAnswer } from '../../bff/operations/index.jsx';
import { addAnswer } from './add-answer.jsx';

export const addStubAnswerAsync = (id) => (dispatch) => {
	addNewAnswer(id).then((dataTest) => {
		if (dataTest.res) dispatch(addAnswer(dataTest.res));
	});
};
