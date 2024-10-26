import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';

export const CurrentUser = () => {
	const { name } = useContext(AppContext);
	return (
		<div>
			<div>Current user: {name}</div>
		</div>
	);
};
