import PropTypes from 'prop-types';
import styles from './Widget.module.css';
import { HelloMessageWithLogging } from './LoggingMessage.jsx';

export const UserWidgetHOC = () => {
	const user = 'Bob';
	return (
		<div className={styles.container}>
			<hr />
			<div>Current user: {user}</div>
			<div>Message:</div>
			<HelloMessageWithLogging user={user} />
		</div>
	);
};
UserWidgetHOC.propTypes = {
	render: PropTypes.func,
};
