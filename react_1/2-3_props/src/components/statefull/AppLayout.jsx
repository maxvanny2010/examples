import app from '../../App.module.css';
import styles from './AppContainer.module.css';

export const AppLayout = ({ a, b, sum, setA, setB }) => {
	return (
		<div className={`${app.block} ${app.color}`}>
			<div className={styles.h4}> Stateless-Stateful</div>
			<hr className={styles.hr} />
			<div>A: {a}</div>
			<button className={styles.button}
					onClick={() => setA(a + 1)}>Прибавить 1 к A
			</button>
			<div>B: {b}</div>
			<button className={styles.button}
					onClick={() => setB(b + 1)}>Прибавить 1 к B
			</button>
			<div>Сумма A+B: {sum}</div>
		</div>
	);
};
