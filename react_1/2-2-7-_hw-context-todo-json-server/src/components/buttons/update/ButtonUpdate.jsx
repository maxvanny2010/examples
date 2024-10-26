import { useContext, useState } from 'react';
import { ModalUpdateTask } from '../../modal/update/ModalUpdate.jsx';
import { RequestsContext, RequestsStatusContext, TodoContext } from '../../context/indexContext.jsx';

export const ButtonUpdate = () => {
	const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
	const [newTask, setNewTask] = useState('');
	const { id, task, completed } = useContext(TodoContext);
	const { updateTask } = useContext(RequestsContext);
	const { isUpdatingTask } = useContext(RequestsStatusContext);
	return (
		<>
			<button
				type="button"
				disabled={completed || isUpdatingTask}
				onClick={(e) => {
					e.stopPropagation();
					setIsModalUpdateOpen(true);
					setNewTask(task);
				}}
			>
				UPDATE
			</button>
			{
				isModalUpdateOpen && <ModalUpdateTask
					newTask={newTask}
					setNewTask={setNewTask}
					onClose={() => setIsModalUpdateOpen(false)}
					onUpdate={(input) => {
						updateTask(id, {
							id,
							task: input,
							completed,
						});
						setIsModalUpdateOpen(false);
					}}
				/>
			}
		</>
	);
};
