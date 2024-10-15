import styles from './Counter.module.css';

export const Counter = ({ value, onSetValue }) => (
	<>
		{/* Single resource of truth*/}
		<div>{value}</div>
		<button className={styles.button}
				onClick={() => onSetValue(value + 1)}>Counter Callback
		</button>
	</>
);

