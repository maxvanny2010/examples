import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';

export const UserContacts = () => {
	const { userData } = useContext(AppContext);
	const { email, phone } = userData;
	return (
		<div>
			<h3>Contact</h3>
			<div>Email: {email}</div>
			<div>Phone: {phone}</div>
		</div>
	);
};
