import { PersonalInfo } from '../info/PersonalInfo.jsx';
import { Contacts } from '../contacts/Contacts.jsx';

export const UserBlock = () => {
	return (
		<div>
			<h2>User</h2>
			<PersonalInfo />
			<Contacts />
		</div>
	);
};
