import { useSelector } from 'react-redux';
import { selectAge, selectName } from '../../selectors/user-selectors.jsx';
import styles from './User.module.css';

export const User = () => {
	const name = useSelector(selectName);
	const age = useSelector(selectAge);
	return (
		<div className={styles.userBlock}>
			<hr />
			<div>User:</div>
			<div>Name: {name}</div>
			<div>Age:{age}</div>
			<hr />
		</div>
	);
};
