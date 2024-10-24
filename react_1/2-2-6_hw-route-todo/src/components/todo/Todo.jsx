import { TodoLoadingLayout } from './TodoLoadingLayout.jsx';
import { TodoManagerLayout } from './TodoManagerLayout.jsx';
import { findDuplicate, getTaskName, useRequestCreate, useRequestGet } from '../hooks/hooks.jsx';
import { useState } from 'react';
import { useSearchTaskDebounce } from '../../util/useSearchTaskDebounce.jsx';
import { TaskList } from '../tasklist/TaskList.jsx';


export const Todo = () => {
	const [input, setInput] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const { isLoading, todos, todosAll, setTodos, setTodosAll } = useRequestGet();
	const [searchTasks, setSearchTasks] = useState([]);
	const { isCreating, createTask } = useRequestCreate(setTodos, setTodosAll, todosAll);

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
			<TodoManagerLayout
				todos={todos}
				setTodos={setTodos}
				onInput={input}
				onSubmit={onSubmit}
				isCreating={isCreating}
				setOnInput={setInput}
				errorMessage={errorMessage}
				handleSearch={handleSearch}
			/>
			{isLoading
				? <TodoLoadingLayout />
				: <TaskList todos={todos} />
			}
		</>
	);
};
