import { useEffect, useState } from 'react';

export const EffectFirstMounting = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('https://some.com')
			.then(loadedData => loadedData.json())
			.then(loadedProducts => {
				setProducts(loadedProducts);
			});
	}, []);// each render
	return (
		<div className={styles.container}>
			{products.map(({ id, name, price }) => (
				<div key={id}>{name} - {price} euro</div>
			))}
		</div>
	);
};
