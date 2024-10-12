import React, { useState } from 'react';
import app from '../styles/App.module.css';
import style from '../styles/ComponentsState.module.css';

const getTimeFromDate = (date) => date.toISOString().substring(11, 19);

export const ComponentState = () => {
	const [currentState, setCurrentState] = useState(new Date());

	setTimeout(() => setCurrentState(new Date()), 1000);

	const currentTime = getTimeFromDate(currentState);
	return (
		<div className={`${app.block} ${style.color}`}>
			<div>
				<span>State</span>
			</div>
			<div>
				<hr className={style.hr} />
				{currentTime}
			</div>
		</div>
	);
};
