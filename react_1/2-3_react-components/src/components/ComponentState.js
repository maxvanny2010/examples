import { useState } from 'react';

const getTimeFromDate = (date) => date.toISOString().substring(11, 19);

export const ComponentState = () => {
	const [currentState, setCurrentState] = useState(new Date());

	setTimeout(() => setCurrentState(new Date()), 1000);

	const currentTime = getTimeFromDate(currentState);
	return (
		<div>
			{currentTime}
		</div>
	);
};
