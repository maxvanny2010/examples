import { setTestData } from './set-test-data.jsx';
import { fetchTest } from '../../bff/operations/index.jsx';

export const loadTestDataAsync = () => (dispatch) => {
	fetchTest().then(testData => {
		dispatch(setTestData(testData.res));
	});
};
