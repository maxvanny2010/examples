import styles from './CatalogAsync.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { fetchProductList } from '../productasync/ProductAsync.jsx';
import { useEffect, useState } from 'react';

export const CatalogAsync = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const productList = fetchProductList();
		setProducts(productList);
	}, []);

	return (
		<>
			<div className={styles.container}>
				<h3>Catalog Products</h3>
				<ul>
					{products.map(({ id, name }) => (
						<li key={id}>
							<NavLink
								to={`products/${id}`}
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



