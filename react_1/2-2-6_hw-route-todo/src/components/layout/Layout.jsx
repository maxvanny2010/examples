import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div className={styles.headerName}>{'TODO LIST ROUTER JSON-SERVER'}</div>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};
