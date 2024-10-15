import { User } from './components/user/User.jsx';
import app from './App.module.css';
import styles from './App.module.css';

const getUserFromServer = () => (
	{
		name: 'Иван',
		age: 25,
		email: 'ivan@mail.com',
		phone: '+87-999-99-99',
	}
);

export const App = () => {
	const user = getUserFromServer();

	return (
		<div className={`${app.block} ${app.color}`}>
			<div className={styles.h4}>Destructuring Components</div>
			<hr className={app.hr} />
			<div>Разная информация приложения</div>
			<label className={styles.appLabel}>Component_1_0</label>
			<User {...user} />
			{/*<User
				name={user.name}
				age={user.age}
				email={user.email}
				phone={user.phone} />*/}
		</div>
	);
};
