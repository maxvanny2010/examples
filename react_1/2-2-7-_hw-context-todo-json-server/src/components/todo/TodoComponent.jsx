import styles from './TodoComponent.module.css';
import { TodoLoadingLayout } from './TodoLoadingLayout.jsx';
import { TodoTableLayout } from './TodoTableLayout.jsx';
import {
	findDuplicate,
	getTaskName,
	useRequestCreate,
	useRequestDelete,
	useRequestGet,
	useRequestUpdateStatus,
	useRequestUpdateTask,
} from '../hook/hooks.jsx';
import { useState } from 'react';
import { useSearchTaskDebounce } from '../../util/useSearchTaskDebounce.jsx';
import { AppContext, FunctionContext, RequestsContext, RequestsStatusContext } from '../context/indexContext.jsx';


export const TodoComponent = () => {
	const [input, setInput] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const { isLoading, setTodos, setTodosAll, todos, todosAll } = useRequestGet();
	const [searchTasks, setSearchTasks] = useState([]);
	const { createTask, isCreating } = useRequestCreate(setTodos, setTodosAll, todosAll);
	const { updateTaskStatus, isUpdatingStatus } = useRequestUpdateStatus(setTodos, setTodosAll);
	const { updateTask, isUpdatingTask } = useRequestUpdateTask(setTodos, setTodosAll);
	const { deleteTask, isDeleting } = useRequestDelete(setTodos, setTodosAll);

	useSearchTaskDebounce(searchTasks, setTodos, todosAll, input);

	const onSubmit = (event) => {
		event.preventDefault();
		const task = getTaskName(input);
		if (findDuplicate(todos, task)) {
			setErrorMessage('Task already exists');
			setTimeout(() => {
				setErrorMessage('');
			}, 3000);
		} else {
			createTask(task);
			setInput('');
		}
	};
	const handleSearch = (event) => {
		const value = event.target.value;
		const target = getTaskName(value).toLowerCase();
		if (target) setSearchTasks(target);
	};

	return (
		<>
			<div className={styles.header}> {'TODO LIST JSON-SERVER'}</div>
			<div className={styles.container}>
				{
					isLoading
						? <TodoLoadingLayout />
						: (
							<AppContext.Provider value={{ todos, input, errorMessage }}>
								<RequestsContext.Provider value={{ updateTaskStatus, updateTask, deleteTask }}>
									<RequestsStatusContext.Provider value={{
										isCreating,
										isUpdatingStatus,
										isUpdatingTask,
										isDeleting,
									}}>
										<FunctionContext.Provider value={{ setTodos, setInput, onSubmit, handleSearch }}>
											<TodoTableLayout />
										</FunctionContext.Provider>
									</RequestsStatusContext.Provider>
								</RequestsContext.Provider>
							</AppContext.Provider>
						)
				}
			</div>
		</>
	);
};
