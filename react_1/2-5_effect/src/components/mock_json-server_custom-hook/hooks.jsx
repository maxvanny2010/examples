import { useEffect, useState } from 'react';
/* json-server --watch src/assets/db.json5 --port 5000 */
export const useRequestGetProducts = () => {
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
	}, []);

	return { products, setProducts, isLoading };
};
export const useRequestAddVacuumCleaner = (setProducts) => {
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
			.then(newProduct => {
				console.log('Vacuum added, the server answer: ' + newProduct);
				setProducts(prevProduct => [...prevProduct, newProduct]);
			}).finally(() => setIsCreating(false));
	};
	return { requestAddVacuumCleaner, isCreating };
};

export const useRequestDeleteVacuumCleaner = (setProducts) => {
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
						console.log(`Delete product from ${lastProduct.name}, ID:${lastProduct.id}`);
						setProducts(prevProducts => prevProducts.filter(product => product.id !== lastProduct.id));
					});
				} else {
					console.log(`No product with the name "${productName}" found.`);
				}
			})
			.catch(error => console.error('Error deleting product:', error))
			.finally(() => setIsDeleting(false));
	};
	return { requestDeleteVacuumCleaner, isDeleting };
};
export const useRequestUpdatePhone = (setProducts) => {
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
			.then(updateProduct => {
				console.log('Phone was updated, the server answer: ' + updateProduct);
				setProducts(prevProducts => prevProducts
					.map(product =>
						product.id === updateProduct.id ? updateProduct : product));
			}).finally(() => setIsUpdating(false));
	};
	return { requestUpdateSmartphone, isUpdating };
};
