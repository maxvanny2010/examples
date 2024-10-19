import { useEffect, useState } from 'react';
import styles from './EffectJsonPlaceholder.module.css';
import { EffectLoaderPlaceholderLayout } from './EffectLoaderPlaceholderLayout.jsx';
import { EffectTableLayout } from './EffectTableLayout.jsx';

export const EffectJsonPlaceholder = () => {

	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isCreating, setIsCreating] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
			.then(loadedData => loadedData.json())
			.then(loadedProducts => {
				setProducts(loadedProducts);
			})
			.finally(() => setIsLoading(false));
	}, []);

	const requestAddPost = () => {
		setIsCreating(true);
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=UTF-8' },
			body: JSON.stringify({
				title: 'New Post',
				body: 'some text some text some text some text some text some text',
				userId: 1,
			}),
		}).then(loadedData => loadedData.json())
			.then(response => {
				setProducts([...products, response]);
				console.log('Post is added, the server answer: ' + response);
			}).finally(() => setIsCreating(false));
	};
	return (
		<>
			<div className={styles.container}>
				{isLoading ? (
					<EffectLoaderPlaceholderLayout />
				) : (
					<EffectTableLayout products={products} />
				)}
			</div>
			<div className={styles.buttons}>
				<button
					disabled={isCreating}
					onClick={
						requestAddPost
					}
				> Add post
				</button>

			</div>
		</>
	);
};
