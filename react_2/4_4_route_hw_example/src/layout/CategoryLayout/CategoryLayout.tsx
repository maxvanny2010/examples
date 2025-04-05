import { Layout } from '../../components/Layout/Layout';
import { Link, Outlet } from 'react-router-dom';
import styles from './CategoryLayout.module.css';

export function CategoryLayout() {
	return (
		<Layout className={styles.root}>
			<aside className={styles.aside}>
				<ul>
					<li>
						<Link to="characters">Heroes</Link>
					</li>
					<li>
						<Link to="location">Locations</Link>
					</li>
					<li>
						<Link to="episode">Episodes</Link>
					</li>
				</ul>
			</aside>
			<main className={styles.main}>
				<Outlet />
			</main>
		</Layout>
	);
}
