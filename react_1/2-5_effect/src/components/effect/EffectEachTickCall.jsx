import { useEffect, useState } from 'react';

export const EffectEachTickCall = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('https://some.com')
			.then(loadedData => loadedData.json())
			.then(loadedProducts => {
				setProducts(loadedProducts);
			});
	});// no []-> each tick
	return (
		<div className={styles.container}>
			{products.map(({ id, name, price }) => (
				<div key={id}>{name} - {price} euro</div>
			))}
		</div>
	);
};
