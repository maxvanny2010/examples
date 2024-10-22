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
	const [input, setInput] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const { isLoading, setTodos, setTodosAll, todos, todosAll } = useRequestGet();
	const [searchTasks, setSearchTasks] = useState([]);
	const { createTask, isCreating } = useRequestCreate(setTodos, setTodosAll, todosAll);
	const { updateTaskStatus, isUpdatingStatus } = useRequestUpdateStatus(setTodos, setTodosAll);
	const { updateTask, isUpdatingTask } = useRequestUpdateTask(setTodos, setTodosAll);
	const { deleteTask, isDeleting } = useRequestDelete(setTodos, setTodosAll);

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
								isCreating={isCreating}
								updateTaskStatus={updateTaskStatus}
								isUpdatingStatus={isUpdatingStatus}
								updateTask={updateTask}
								isUpdatingTask={isUpdatingTask}
								deleteTask={deleteTask}
								isDeleting={isDeleting}
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
