import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalDelete } from '../../modal/delete/ModalDelete.jsx';
import PropTypes from 'prop-types';

export const ButtonDelete = ({ todo, deleteTask }) => {
	const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
	const [taskIdToDelete, setTaskIdToDelete] = useState(null);
	const navigate = useNavigate();
	return (
		<>
			<button
				type="button"
				onClick={(e) => {
					e.stopPropagation();
					setTaskIdToDelete(todo.id);
					setIsModalDeleteOpen(true);
				}}
			>
				DELETE
			</button>
			{
				isModalDeleteOpen && <ModalDelete
					onClose={() => setIsModalDeleteOpen(false)}
					onDelete={() => {
						deleteTask(taskIdToDelete).then(() => {
							setIsModalDeleteOpen(false);
							navigate('/');
						});
					}}
				/>
			}
		</>
	);
};
ButtonDelete.propTypes = {
	todo: PropTypes.object.isRequired,
	deleteTask: PropTypes.func.isRequired,
};
