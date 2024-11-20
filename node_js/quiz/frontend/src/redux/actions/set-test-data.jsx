import { ACTION_TYPE } from '../../utils/index.jsx';

export const setTestData = (testData) => ({
	type: ACTION_TYPE.SET_TEST_DATA,
	payload: testData,
});
