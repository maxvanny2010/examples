import styles from './Widget.module.css';
import { HelloMessageWithLoggingAnColor } from './LoggingMessageAndColor.jsx';
import { HelloMessage } from '../render-props/HelloMessage.jsx';
import { MessageWithLoggingAndChildren } from './MessageWithLoggingAndChildren.jsx';

export const UserWidgetHOCColor = () => {
	const user = 'Bob';
	return (
		<div className={styles.container}>
			<hr />
			<div>Current user: {user}</div>
			<div>Message:</div>
			<HelloMessageWithLoggingAnColor color="pink"
											user={user} />
			<hr />
			<MessageWithLoggingAndChildren color="lightgreen">
				<HelloMessage user="Charly" />
			</MessageWithLoggingAndChildren>
		</div>
	);
};
