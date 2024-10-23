import styles from './Catalog.module.css';
import { NavLink, Outlet } from 'react-router-dom';

const fetchProductsList = () => [
	{ id: 1, name: 'TV' },
	{ id: 2, name: 'Phone' },
	{ id: 3, name: 'Laptop' },
];
export const Catalog = () => {

	return (
		<>
			<div className={styles.container}>
				<h3>Catalog Products</h3>
				<ul>
					{fetchProductsList().map(({ id, name }) => (
						<li key={id}>
							<NavLink
								to={`${id % 2 === 0 ? 'service' : 'product'}/${id}`}
							>
								{name}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.container}>
				<Outlet />
			</div>
		</>
	);
};



