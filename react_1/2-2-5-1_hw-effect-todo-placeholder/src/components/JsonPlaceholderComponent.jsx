import { useEffect, useState } from 'react';
import styles from './JsonPlaceholderComponent.module.css';
import { JsonPlaceholderTableLayout } from './JsonPlaceholderTableLayout.jsx';
import { JsonPlaceholderLoaderLayout } from './JsonPlaceholderLoadingLayout.jsx';

export const JsonPlaceholderComponent = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=9')
			.then(loadedData => loadedData.json())
			.then(todos => {
				setTodos(todos);
			})
			.catch(e => console.log('Todos is missing ', e))
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			<div className={styles.header}></div>
			<div className={styles.container}>
				{
					isLoading
						? (<JsonPlaceholderLoaderLayout />)
						: (<JsonPlaceholderTableLayout todos={todos} />)
				}
			</div>
		</>
	);
};
