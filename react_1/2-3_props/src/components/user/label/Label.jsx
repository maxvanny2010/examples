import styles from './Label.module.css';

export const Label = ({ color, children }) => (
	<label className={`${styles.label} ${styles[color]}`}>
		{children}:
	</label>
);

