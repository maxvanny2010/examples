import { useState } from 'react';
import { Counter } from './Counter.jsx';
import app from '../../App.module.css';
import styles from './Counter.module.css';

export const Parent = () => {
	const [value, setValue] = useState(0);

	return (
		<div className={`${app.block} ${styles.color}`}>
			<div className={styles.h4}>Probros onSetValue</div>
			<label>Parent Callback Counter:</label>
			<hr className={styles.hr} />
			<Counter value={value}
					 onSetValue={setValue} />
		</div>
	);
};
