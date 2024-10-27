import { store } from '../../Store.jsx';
import { useEffect, useState } from 'react';
import style from './PersonalInfo.module.css';

function getRandomName() {
	const names = ['Alice', 'Java', 'JS', 'Angular', 'React'];
	const randomIndex = Math.floor(Math.random() * names.length);
	return names[randomIndex];
}

export const PersonalInfo = () => {
	const [userData, setUserData] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setUserData(store.getState());
		});
		return () => unsubscribe();
	}, []);

	const onUserAgeIncrease = () => {
		store.dispatch({ type: 'SET_USER_AGE', payload: userData.age + 1 });
	};
	const onUseUpdate = () => {
		const newUserData = { name: getRandomName(), age: userData.age - 1 };
		store.dispatch({ type: 'SET_USER_DATA', payload: newUserData });
	};
	return (
		<div>
			<h3>Personal Details</h3>
			<div>Name: {userData.name}</div>
			<div>Age: {userData.age}</div>
			<div className={style.buttons}>
				<button onClick={onUseUpdate}>Update user data</button>
				<button onClick={onUserAgeIncrease}>Update user data</button>
			</div>
		</div>
	);
};
