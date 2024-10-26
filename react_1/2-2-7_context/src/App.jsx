import style from './App.module.css';
import { useEffect, useReducer } from 'react';
import { UserBlock } from './components/userblock/UserBlock.jsx';
import { Header } from './components/header/Header.jsx';
import { AppContext } from './components/context/AppContext.jsx';

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

const reducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_USER_DATA': {
			return payload;
		}
		case 'SET_USER_AGE': {
			return {
				...state,
				age: payload,
			};
		}
		default:
			return state;
	}
};
/** when to use:
 1. theme
 2. user session
 3. keep state app
 **/

export const App = () => {
	/*const [userData, setUserData] = useState({});*/
	const [userData, dispatch] = useReducer(reducer, {});

	/*	const dispatch = (action) => {
			const newState = reducer(userData, action);
			setUserData(newState);
		};*/

	useEffect(() => {
		const userDataFromServer = getUserFromServer();
		dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });
	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnotherUserFromServer();
		dispatch({ type: 'SET_USER_AGE', payload: anotherUserDataFromServer.age });
	};
	return (
		<AppContext.Provider value={{ userData, dispatch }}>
			<div className={style.container}>
				<Header />
				<hr />
				<UserBlock />
				<button onClick={onUserChange}>Change user</button>
			</div>
		</AppContext.Provider>
	);
};
/*
return (
		<AppContextProvider
			themeValue={themeValue}
			userValue={userValue}
			appConfigValue={appConfigValue}>
			<div>
				<Header />
				<hr />
				<UserBlock />
			</div>
		</AppContextProvider>
	);
*/

/*  export const AppAllContexts = () => {
  const { name, age, email, phone } = getUserFromServer();

  return (
    <div className={styles.app}>
      <Header currentUser={name} />
      <hr />
      <UserBlock name={name} age={age} email={email} phone={phone} />
    </div>
  );
};
*/

