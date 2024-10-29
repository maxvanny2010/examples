export const RESET_AGE = {
	type: 'RESET_AGE',
};
export const increaseAge = (delta) => ({
	type: 'INCREASE_AGE',
	payload: delta,
});
export const changeUser = () => {
	return (dispatch) => {
		return fetchUserDataMock().then((userDataFromServer) => {
			console.log('before dispatching');
			dispatch({
				type: 'CHANGE_USER',
				payload: userDataFromServer,
			});
		});
	};
};
export const fetchUserDataMock = () => {
	console.log('before fetchUserDataMock');
	const names = ['Alice', 'Bob'];
	const randomName = names[Math.floor(Math.random() * names.length)];
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('Promise sync');
			resolve({
					name: randomName,
					age: 30,
				},
			);
		}, 1000);
	});
};
