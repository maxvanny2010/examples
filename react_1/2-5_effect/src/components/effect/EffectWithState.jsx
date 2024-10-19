import { useEffect, useState } from 'react';

export const EffectWithState = ({ url }) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch(url)
			.then(loadedData => loadedData.json())
			.then(loadedProducts => {
				setProducts(loadedProducts);
			});
	}, [url]);// if change url
	return (
		<div className={styles.container}>
			{products.map(({ id, name, price }) => (
				<div key={id}>{name} - {price} euro</div>
			))}
		</div>
	);
};
