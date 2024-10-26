import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';

export const UserPersonalInfo = () => {
	const { userData, dispatch } = useContext(AppContext);
	const { name, age } = userData;

	const onUserAgeIncrease = () => {
		dispatch({ type: 'SET_USER_AGE', payload: age + 1 });
	};
	return (
		<div>
			<h3>Personal details</h3>
			<div>Name: {name}</div>
			<div>Age: {age}</div>
			<button onClick={onUserAgeIncrease}>Update user data</button>
		</div>
	);
};
