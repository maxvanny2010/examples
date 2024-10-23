import styles from './Layout.module.css';
import { Menu } from '../menu/Menu.jsx';
import { Outlet } from 'react-router-dom';

export const Layout = () => {

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div className={styles.headerName}>{'ROUTERS'}</div>
				<Menu />
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};



