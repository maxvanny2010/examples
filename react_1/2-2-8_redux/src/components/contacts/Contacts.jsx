import { store } from '../../Store.jsx';
import { useEffect, useState } from 'react';

export const Contacts = () => {
	const [userData, setUserData] = useState(store.getState());
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setUserData(store.getState());
		});
		return () => unsubscribe();
	}, []);
	return (
		<div>
			<h3>Contacts</h3>
			<div>Email: {userData.email}</div>
			<div>Phone: {userData.phone}</div>
		</div>
	);
};
