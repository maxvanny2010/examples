import styles from '../App.module.css';

const getUserFromServer = () => ({
	name: 'Ivan',
	age: 25,
	email: 'ivan#mail.com',
	phone: '+830000',
});

function App() {
	const user = getUserFromServer();

	return (
		<div className={styles.app}>
			<label className={styles.appLabel}>
				Web application
			</label>
			<div>Diff information</div>
			<div className={styles.user}>
				<label className={styles.userLabel}>
					User
				</label>
				<div>Name: {user.name}</div>
				<div>Age: {user.age}</div>
				<label className={styles.contacts}>
					Contact
				</label>
				<div>Email: {user.email}</div>
				<div>Phone: {user.phone}</div>
			</div>
		</div>
	);
}
