import { useRef, useState } from 'react';
import styles from './RefCounter.module.css';
import style from '../../index.module.css';

export const RefCounter = () => {
	const [counter, setCounter] = useState(0);
	const refCounter = useRef(0);
	const incrementRefCounter = () => {
		refCounter.current += 1;
	};
	const incrementStateCount = () => {
		setCounter(counter + 1);
	};
	return (
		<div className={style.block}>
			<label className={styles.label}>Ref Counter</label>
			<p>refCount: {refCounter.current}</p>
			<button onClick={incrementRefCounter}>Increment Counter</button>
			<p>stateCount: {counter}</p>
			<button onClick={incrementStateCount}>Increment State Count</button>
		</div>
	);
};
