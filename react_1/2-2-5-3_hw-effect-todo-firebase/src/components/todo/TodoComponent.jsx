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
} from './hooks.jsx';
import { useState } from 'react';
import { searchTaskDebounce } from '../../util/searchTaskDebounce.jsx';


export const TodoComponent = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [input, setInput] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [searchTasks, setSearchTasks] = useState([]);
	const { todos, todosAll, setTodos } = useRequestGet(setIsLoading);
	const createTask = useRequestCreate(setIsLoading);
	const updateTaskStatus = useRequestUpdateStatus(setIsLoading);
	const updateTask = useRequestUpdateTask(setIsLoading);
	const deleteTask = useRequestDelete(setIsLoading);

	searchTaskDebounce(searchTasks, setTodos, todosAll, input);

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
							<TodoTableLayout
								todos={todos}
								setTodos={setTodos}
								onInput={input}
								onSubmit={onSubmit}
								isLoading={isLoading}
								updateTaskStatus={updateTaskStatus}
								updateTask={updateTask}
								deleteTask={deleteTask}
								setOnInput={setInput}
								errorMessage={errorMessage}
								handleSearch={handleSearch}
							/>
						)
				}
			</div>
		</>
	);
};
