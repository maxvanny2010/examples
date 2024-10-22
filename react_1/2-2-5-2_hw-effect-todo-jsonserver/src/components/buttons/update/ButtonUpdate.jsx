import { useState } from 'react';
import { ModalUpdateTask } from '../../modal/update/ModalUpdate.jsx';

export const ButtonUpdate = ({
								 id,
								 task,
								 completed,
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
				disabled={completed || isUpdatingTask}
				onClick={(e) => {
					e.stopPropagation();
					setIdToUpdate(id);
					setTaskToUpdate(task);
					setCompletedToUpdate(completed);
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
						});
						setIsModalUpdateOpen(false);
					}}
				/>
			}
		</>
	);
};
