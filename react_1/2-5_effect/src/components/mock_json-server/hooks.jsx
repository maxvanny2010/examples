import { useEffect, useState } from 'react';

export const useRequestGetProducts = refreshProducts => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('http://localhost:5000/products')
			.then(loadedData => loadedData.json())
			.then(loadedProducts => {
				setProducts(loadedProducts);
			})
			.finally(() => setIsLoading(false));
	}, [refreshProducts]);

	return { products, isLoading };
};
export const useRequestAddVacuumCleaner = (refreshProducts, setRefreshProducts) => {
	const [isCreating, setIsCreating] = useState(false);
	const requestAddVacuumCleaner = () => {
		setIsCreating(true);
		fetch('http://localhost:5000/products', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
			body: JSON.stringify({
				name: 'Vacuum Cleaner',
				price: 4690,
			}),
		})
			.then(loadedData => loadedData.json())
			.then(response => {
				console.log('Vacuum added, the server answer: ' + response);
				setRefreshProducts(!refreshProducts);
			}).finally(() => setIsCreating(false));
	};
	return { requestAddVacuumCleaner, isCreating };
};

export const useRequestDeleteVacuumCleaner = (refreshProducts, setRefreshProducts) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const requestDeleteVacuumCleaner = (productName) => {
		setIsDeleting(true);
		fetch('http://localhost:5000/products')
			.then(loadedData => loadedData.json())
			.then(products => {
				const matchingProducts = products.filter(product => product.name === productName);
				if (matchingProducts.length > 0) {
					const lastProduct = matchingProducts[matchingProducts.length - 1];

					fetch(`http://localhost:5000/products/${lastProduct.id}`, {
						method: 'DELETE',
					}).then(() => {
						console.log(`Delete product from ${productName.name}, ID:${lastProduct.id}`);
						setRefreshProducts(!refreshProducts);
					});
				} else {
					console.log('No product with the name "${productName}" found.');
				}
			})
			.catch(error => console.error('Error deleting product:', error))
			.finally(() => setIsDeleting(false));
	};
	return { requestDeleteVacuumCleaner, isDeleting };
};
export const useRequestUpdatePhone = (refreshProducts, setRefreshProducts) => {
	const [isUpdating, setIsUpdating] = useState(false);
	const requestUpdateSmartphone = () => {
		setIsUpdating(true);
		fetch('http://localhost:5000/products/002')
			.then(loadedData => loadedData.json())
			.then(loadedProduct => {
				const updateProduct = {
					...loadedProduct,
					price: loadedProduct.price - 1000,
				};

				return fetch('http://localhost:5000/products/002', {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json; charset=UTF-8' },
					body: JSON.stringify(updateProduct),
				});
			})
			.then(loadedData => loadedData.json())
			.then(response => {
				console.log('Phone was updated, the server answer: ' + response);
				setRefreshProducts(!refreshProducts);
			}).finally(() => setIsUpdating(false));
	};
	return { requestUpdateSmartphone, isUpdating };
};
