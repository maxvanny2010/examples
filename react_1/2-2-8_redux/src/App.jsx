import style from './App.module.css';
import { useEffect } from 'react';
import { UserBlock } from './components/userblock/UserBlock.jsx';
import { Header } from './components/header/Header.jsx';
import { store } from './Store.jsx';

const getUserFromServer = () => (
	{
		id: 'a1001',
		name: 'React',
		age: 25,
		email: 'react@gmail.com',
		phone: '+75399-999-99-99',
	}
);
const getAnotherUserFromServer = () => (
	{
		id: 'a1002',
		name: 'Angular',
		age: 35,
		email: 'angular@gmail.com',
		phone: '+75399-999-99-98',
	}
);

export const App = () => {
	useEffect(() => {
		const userDataFromServer = getUserFromServer();
		store.dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });
	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnotherUserFromServer();
		store.dispatch({ type: 'SET_USER_AGE', payload: anotherUserDataFromServer.age });
	};
	return (
		<div className={style.container}>
			<Header />
			<hr />
			<UserBlock />
			<button onClick={onUserChange}>Change user</button>
		</div>
	);
};

