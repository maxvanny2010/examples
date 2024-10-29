import './App.module.css';
import { User } from './component/user/User.jsx';
import { Panel } from './component/panel/Panel.jsx';
import styles from './App.module.css';

export default function App() {

	return (
		<div className={styles.container}>
			<User />
			<Panel />
		</div>
	);
};



