import { TodoLoadingLayout } from './TodoLoadingLayout.jsx';
import { TodoManagerLayout } from './TodoManagerLayout.jsx';
import { findDuplicate, getTaskName, useRequestCreate, useRequestGet } from '../hooks/hooks.jsx';
import { useState } from 'react';
import { searchTaskDebounce } from '../../util/searchTaskDebounce.jsx';
import { TaskList } from '../tasklist/TaskList.jsx';


export const Todo = ({ setTodos, setTodosAll, todos, todosAll }) => {
	const [input, setInput] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const { isLoading } = useRequestGet(setTodos, setTodosAll);
	const [searchTasks, setSearchTasks] = useState([]);
	const { createTask, isCreating } = useRequestCreate(setTodos, setTodosAll, todosAll);

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
