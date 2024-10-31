import PropTypes from 'prop-types';
import styles from './Widget.module.css';

export const UserWidget = ({ render }) => {
	const user = 'Alice';
	return (
		<div className={styles.container}>
			<hr />
			<div>Current user: {user}</div>
			<div>Message:</div>
			{render(user)}
			{/*<Message user={user} />*/}
			{/*<UserWidget Message={HelloMessage} />*/}
			{/*<UserWidget Message={GoodByeUser} messageProps={{ user }} />*/}
			{/*<HelloMessage user={user}/>*/}
			{/*<GoodByMessage user={user}/>*/}
		</div>
	);
};
UserWidget.propTypes = {
	render: PropTypes.func,
};
