import { useDispatch } from 'react-redux';
import { changeUser, increaseAge, RESET_AGE } from '../../sactions/action.jsx';
import styles from './Panel.module.css';

export const Panel = () => {
	const dispatch = useDispatch();
	const onAgeIncrease = () => {
		dispatch(increaseAge(3));
	};
	const onAgeDecrease = () => {
		dispatch(RESET_AGE);
	};
	const onChangeUser = () => {
		dispatch(changeUser());
	};
	return (
		<div className={styles.buttons}>
			<button onClick={onAgeIncrease}>+3 age</button>
			<button onClick={onAgeDecrease}>reset age</button>
			<button onClick={onChangeUser}>change user</button>
		</div>
	);
};
