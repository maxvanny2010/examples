import { useState } from 'react';
import { ModalUpdateTask } from '../../modal/update/ModalUpdate.jsx';

export const ButtonUpdate = ({
								 todo,
								 setTodo,
								 isUpdatingTask,
								 updateTask,
							 }) => {
	const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
	const [idToUpdate, setIdToUpdate] = useState(null);
	const [taskToUpdate, setTaskToUpdate] = useState(null);
	const [completedToUpdate, setCompletedToUpdate] = useState(false);
	return (
		<>
			<button
				type="button"
				disabled={todo.completed || isUpdatingTask}
				onClick={(e) => {
					e.stopPropagation();
					setIdToUpdate(todo.id);
					setTaskToUpdate(todo.task);
					setCompletedToUpdate(todo.completed);
					setIsModalUpdateOpen(true);
				}}
			>
				UPDATE
			</button>
			{
				isModalUpdateOpen && <ModalUpdateTask
					taskToUpdate={taskToUpdate}
					setTaskToUpdate={setTaskToUpdate}
					onClose={() => setIsModalUpdateOpen(false)}
					onUpdate={(onInputUpdate) => {
						updateTask(idToUpdate, {
							id: idToUpdate,
							task: onInputUpdate,
							completed: completedToUpdate,
						}).then(updateTask => {
							console.log(updateTask);
							setTodo(updateTask);
						});
						setIsModalUpdateOpen(false);
					}}
				/>
			}
		</>
	);
};
