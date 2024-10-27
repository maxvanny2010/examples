import { store } from '../../Store.jsx';
import { useEffect, useState } from 'react';

export const CurrentUser = () => {
	const [userData, setUserData] = useState(store.getState());
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setUserData(store.getState());
		});
		return () => unsubscribe();
	}, []);
	return (
		<div>
			<div>Current user: {userData.name}</div>
		</div>
	);
};
