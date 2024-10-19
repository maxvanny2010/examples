import { useEffect, useState } from 'react';
import { db } from './firebase-config.jsx';
import { get, onValue, push, ref, remove, set } from 'firebase/database';

export const useRequestGetProducts = (setIsLoading) => {
	const [products, setProducts] = useState({});

	useEffect(() => {
		const productDbRef = ref(db, 'products');
		return onValue(productDbRef, snapshot => {
			const loadedProducts = snapshot.val();
			setProducts(loadedProducts || {});
			setIsLoading(false);
		});
	}, []);
	return products;
};

export const useRequestAddVacuumCleaner = (setIsLoading) => {
	const [isCreating, setIsCreating] = useState(false);
	const requestAddVacuumCleaner = () => {
		setIsLoading(true);
		setIsCreating(true);
		const productDbRef = ref(db, 'products');
		push(productDbRef, {
			name: 'Vacuum Cleaner',
			price: 10000,
		})
			.then(response => console.log('New Vacuum added: ', response))
			.finally(() => {
				setIsCreating(false);
				setIsLoading(false);
			});
	};
	return { requestAddVacuumCleaner, isCreating };
};

export const useRequestUpdatePriceOfPhone = (setIsLoading) => {
	const [isUpdating, setIsUpdating] = useState(false);
	const requestUpdatePriceOfPhone = () => {
		setIsLoading(true);
		setIsUpdating(true);
		const productDbRef = ref(db, 'products/002');
		get(productDbRef)
			.then(snapshot => {
				if (snapshot.exists()) {
					const product = snapshot.val();
					const updateProduct = {
						...product,
						price: product.price - 100,
					};
					set(productDbRef, updateProduct)
						.then(() => {
							console.log('Price updated successfully!');
						})
						.catch((error) => {
							console.error('Error updating price:', error);
						})
						.finally(() => {
							setIsUpdating(false);
							setIsLoading(false);
						});
				} else console.log('Product does not exist.');
			});
	};
	return { requestUpdatePriceOfPhone, isUpdating };
};

export const useRequestDeleteVacuum = (setIsLoading) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const requestDeleteVacuum = async (productName) => {
		setIsLoading(true);
		setIsDeleting(true);
		try {
			const productDbRef = ref(db, 'products');
			const snapshot = await get(productDbRef);
			if (snapshot.exists()) {
				const products = snapshot.val();
				console.log(products);
				const matchingProducts = Object.entries(products)
					.filter(([_, product]) => product.name === productName);
				if (matchingProducts.length > 0) {
					console.log('match; ' + matchingProducts[matchingProducts.length - 1]);
					const lastProductKey = matchingProducts[matchingProducts.length - 1][0];
					await remove(ref(db, `products/${lastProductKey}`));
					console.log(`Deleted product: ${productName}, ID: ${lastProductKey}`);
				} else console.log(`No product with the name "${productName}" found.`);
			} else console.log('No products found.');
		} catch (error) {
			console.error('Error deleting product:', error);
		} finally {
			setIsDeleting(false);
			setIsLoading(false);
		}
	};
	return { requestDeleteVacuum, isDeleting };
};

