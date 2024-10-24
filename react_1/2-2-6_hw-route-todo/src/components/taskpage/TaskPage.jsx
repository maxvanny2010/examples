import { TaskPageLayout } from './TaskPageLayout.jsx';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRequestDelete, useRequestGetById, useRequestUpdateStatus, useRequestUpdateTask } from '../hooks/hooks.jsx';
import { TodoLoadingLayout } from '../todo/TodoLoadingLayout.jsx';
import { TaskNotFound } from '../tasknotfound/TaskNotFound.jsx';

export const TaskPage = ({
							 setTodos,
							 setTodosAll,
						 }) => {
	const { id } = useParams();
	const [todo, setTodo] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const { updateTaskStatus, isUpdatingStatus } = useRequestUpdateStatus(setTodos, setTodosAll);
	const { updateTask, isUpdatingTask } = useRequestUpdateTask(setTodos, setTodosAll);
	const { deleteTask, isDeleting } = useRequestDelete(setTodos, setTodosAll);
	const getTodoById = useRequestGetById();
	useEffect(() => {
		setIsLoading(true);
		getTodoById(id)
			.then(todo => setTodo(todo ? todo : null))
			.finally(() => setIsLoading(false));
	}, [id]);
	if (isLoading) return <TodoLoadingLayout />;
	if (todo === null) return <TaskNotFound />;
	return (
		<TaskPageLayout
			todo={todo}
			setTodo={setTodo}
			updateTaskStatus={updateTaskStatus}
			updateTask={updateTask}
			deleteTask={deleteTask}
			isUpdatingStatus={isUpdatingStatus}
			isUpdatingTask={isUpdatingTask}
			isDeleting={isDeleting}

		/>
	);
};
