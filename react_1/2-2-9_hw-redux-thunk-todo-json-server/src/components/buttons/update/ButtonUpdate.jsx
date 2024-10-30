import { useState } from 'react';
import { ModalUpdateTask } from '../../modal/update/ModalUpdate.jsx';
import { useDispatch } from 'react-redux';
import { updateTaskAsync } from '../../../actions/actionTask.jsx';
import PropTypes from 'prop-types';

export const ButtonUpdate = ({ todo }) => {
	const dispatch = useDispatch();
	const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
	const [updateTask, setUpdateTask] = useState(null);
	return (
		<>
			<button
				type="button"
				disabled={todo.completed}
				onClick={(e) => {
					e.stopPropagation();
					setUpdateTask(todo.task);
					setIsModalUpdateOpen(true);
				}}
			>
				UPDATE
			</button>
			{
				isModalUpdateOpen && <ModalUpdateTask
					taskToUpdate={updateTask}
					setTaskToUpdate={setUpdateTask}
					onClose={() => setIsModalUpdateOpen(false)}
					onUpdate={
						(input) => {
							dispatch(updateTaskAsync(todo.id, { ...todo, task: input }));
							setIsModalUpdateOpen(false);
						}
					}
				/>
			}
		</>
	);
};
ButtonUpdate.propTypes = {
	todo: PropTypes.object.isRequired,
};
