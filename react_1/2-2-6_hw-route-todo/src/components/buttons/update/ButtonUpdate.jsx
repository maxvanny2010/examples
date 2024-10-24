import { useState } from 'react';
import { ModalUpdateTask } from '../../modal/update/ModalUpdateTask.jsx';
import PropTypes from 'prop-types';

export const ButtonUpdate = ({
								 todo,
								 setTodo,
							 }) => {
	const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
	return (
		<>
			<button
				type="button"
				disabled={todo.completed}
				onClick={(e) => {
					e.stopPropagation();
					setIsModalUpdateOpen(true);
				}}
			>
				UPDATE
			</button>
			{
				isModalUpdateOpen && <ModalUpdateTask
					todo={todo}
					onClose={() => setIsModalUpdateOpen(false)}
					onUpdate={(value) => setTodo({ ...todo, task: value })}
				/>
			}
		</>
	);
};
ButtonUpdate.propTypes = {
	todo: PropTypes.object.isRequired,
	setTodo: PropTypes.func.isRequired,
};
