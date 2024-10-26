import { UserPersonalInfo } from '../info/UserPersonalInfo.jsx';
import { UserContacts } from '../contacts/UserContacts.jsx';

export const UserBlock = () => {
	return (
		<div>
			<h2>User</h2>
			<UserPersonalInfo />
			<UserContacts />
		</div>
	);
};

/* export const UserBlock = ({ name, age, email, phone }) => {
	return (
		<div>
			<h2>Пользователь</h2>
			<UserPersonalInfo name={name}
							  age={age} />
			<UserContacts email={email}
						  phone={phone} />
		</div>
	);
};
 */
