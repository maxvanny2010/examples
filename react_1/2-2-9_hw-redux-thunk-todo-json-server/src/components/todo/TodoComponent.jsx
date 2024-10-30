import styles from './TodoComponent.module.css';
import { TodoTableLayout } from './TodoTableLayout.jsx';
import { useEffect } from 'react';
import { fillTodosListAsync } from '../../actions/actionTask.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { TodoLoadingLayout } from './TodoLoadingLayout.jsx';
import { useSearchTaskDebounce } from '../../util/useSearchTaskDebounce.jsx';


export const TodoComponent = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(state => state.stateLoading.isLoading);
	useEffect(() => {
		dispatch(fillTodosListAsync());
	}, [dispatch]);

	useSearchTaskDebounce();
	return (
		<>
			<div className={styles.header}> {'TODO LIST JSON-SERVER'}</div>
			<div className={styles.container}>
				{
					isLoading
						? <TodoLoadingLayout />
						: <TodoTableLayout />
				}
			</div>
		</>
	);
};
