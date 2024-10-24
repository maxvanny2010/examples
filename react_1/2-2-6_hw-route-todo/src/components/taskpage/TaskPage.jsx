import { TaskPageLayout } from './TaskPageLayout.jsx';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRequestDelete, useRequestGetById, useRequestUpdateTask } from '../hooks/hooks.jsx';
import { TodoLoadingLayout } from '../todo/TodoLoadingLayout.jsx';
import { TaskNotFound } from '../tasknotfound/TaskNotFound.jsx';

export const TaskPage = () => {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [todo, setTodo] = useState(null);
	const updateTask = useRequestUpdateTask();
	const deleteTask = useRequestDelete();
	const getTodoById = useRequestGetById();
	useEffect(() => {
		setIsLoading(true);
		getTodoById(id).then(fetchTodo => {
			setTodo(fetchTodo || null);
		}).finally(() => setIsLoading(false));
	}, [id, getTodoById]);
	if (isLoading) return <TodoLoadingLayout />;
	if (todo === null) return <TaskNotFound />;
	return (
		<TaskPageLayout
			todo={todo}
			setTodo={setTodo}
			updateTask={updateTask}
			deleteTask={deleteTask}
		/>
	);
};
