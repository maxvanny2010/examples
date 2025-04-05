import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import logoPng from '../../assets/logo.png';
import { Layout } from '../Layout/Layout';

export function Header() {
	return (
		<header className={styles.root}>
			<Layout className={styles.wrap}>
				<div className={styles.logo}>
					<Link to="/">
						<img src={logoPng}
							 alt="Rick and Morty" />
					</Link>
				</div>
				<nav className={styles.nav}>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/category">Category</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</Layout>
		</header>
	);
}
