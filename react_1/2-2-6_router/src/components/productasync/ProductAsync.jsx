import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './ProductAsync.module.css';
import { ProductNotFound } from '../productnotfound/ProductNotFound.jsx';

const database = {
	productList: [
		{ id: 1, name: 'TV' },
		{ id: 2, name: 'Phone' },
		{ id: 3, name: 'Laptop' },
	],
	products: {
		1: { id: 1, name: 'Tv', price: 29900, amount: 15 },
		2: { id: 2, name: 'Phone', price: 13900, amount: 48 },
		3: { id: 3, name: 'Laptop', price: 18400, amount: 23 },
	},
};

export const fetchProductList = () => database.productList;

const fetchProduct = (id) => new Promise((resolve) => {
	setTimeout(() => {
		console.log('ID:', id);
		resolve(database.products[id]);
	}, 2500);
});

const LOADING_TIMEOUT = 5000;

export const ProductAsync = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [product, setProduct] = useState(null);
	const [isProductNotFound, setIsProductNotFound] = useState(false);
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(true);
		setIsProductNotFound(false);
		let isLoadingTimeout = false;
		let isProductLoaded = false;

		const timeoutId = setTimeout(() => {
			isLoadingTimeout = true;
			if (!isProductLoaded) {
				setIsLoading(false);
				navigate('/products-load-error');
			}
		}, LOADING_TIMEOUT);

		fetchProduct(params.id).then((loadedProduct) => {
			isProductLoaded = true;
			clearTimeout(timeoutId);
			console.log('Product:', product);
			if (!loadedProduct) {
				setIsProductNotFound(true);
				setIsLoading(false);
				/*navigate('/products-not-exist');
				return;*/
			}
			setProduct(loadedProduct);
			setIsLoading(false);
		});
		return () => {
			clearTimeout(timeoutId);
		};
	}, [params.id, navigate]);
	if (isLoading) {
		return <div className={styles.loader}>Loading...</div>;
	}
	if (isProductNotFound) {
		return <ProductNotFound />;
	}

	const { name, price, amount } = product;

	return (
		<div>
			<h3> Product - {name}</h3>
			<div>Price: {price} euro</div>
			<div>Available: {amount} unit(s)</div>
		</div>
	);
};



