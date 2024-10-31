import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Expensive.module.css';

const ExpensiveComponent =
	React.memo(({ onCalculate }) => {
		console.log('ExpensiveComponent re-rendered');
		return <button onClick={onCalculate}>Calculate Memo</button>;
	});
ExpensiveComponent.displayName = 'ExpensiveComponent';
ExpensiveComponent.propTypes = {
	onCalculate: PropTypes.func.isRequired,
};


export const Expensive = () => {
	console.log('-------- Expensive ---------');
	const [count, setCount] = useState(0);
	const [randomValue, setRandomValue] = useState(0);

	const handleRandom = () => {
		setRandomValue(Math.random());
	};

	const handleCalculate = useCallback(() => {
		console.log('Calculating...');
		setCount(prevCount => prevCount + 1);
	}, []);

	return (
		<>
			<div className={styles.container}>
				<ExpensiveComponent onCalculate={handleCalculate} />
				<p className={styles.counter}>Count: {count}</p>
			</div>
			<div className={styles.container}>
				<button onClick={handleRandom}>Update Random Value</button>
				<p className={styles.counter}>Random Value: {randomValue}</p>
			</div>
		</>
	);
};

