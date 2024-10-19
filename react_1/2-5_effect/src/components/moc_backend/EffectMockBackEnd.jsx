import { useEffect, useState } from 'react';
import { EffectLoaderLayout } from './EffectLoaderLayout.jsx';
import { EffectTableLayout } from './EffectTableLayout.jsx';

import styles from './EffectMockBackEnd.module.css';


const PRODUCT_MOCK = [
	{ id: '001', name: 'TV', price: 39000 },
	{ id: '002', name: 'Phone', price: 18900 },
	{ id: '003', name: 'Laptop', price: 1749 },
];

export const EffectMockBackEnd = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		new Promise(resolve => {
			setTimeout(() => {
				resolve({ json: () => PRODUCT_MOCK });
			}, 1000);
		}).then(loadedData => loadedData.json())
			.then(loadedProducts => setProducts(loadedProducts))
			.finally(() => setIsLoading(false));
	}, []);
	return (
		<>
			<div className={styles.header}>useEffect</div>
			<div className={styles.container}>
				{isLoading ? (
					<EffectLoaderLayout />
				) : (
					<EffectTableLayout products={products} />
				)}
			</div>
		</>
	);
};
