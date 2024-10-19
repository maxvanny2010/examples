import { useEffect, useState } from 'react';

export const EffectEachTickCall = ({ url }) => {
	const [products, setProducts] = useState([]);

	const onClickHandler = () => {
	};

	useEffect(() => {
		// 2
		document.addEventListener('click', onClickHandler);
		// 1
		return () => document.removeEventListener('click', onClickHandler);
	}, [url]); // if change url
	return (
		<div className={styles.container}>
			{products.map(({ id, name, price }) => (
				<div key={id}>{name} - {price} euro</div>
			))}
		</div>
	);
};
