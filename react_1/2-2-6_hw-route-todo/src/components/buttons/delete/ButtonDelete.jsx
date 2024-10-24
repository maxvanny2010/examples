import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalDelete } from '../../modal/delete/ModalDelete.jsx';

export const ButtonDelete = ({ todo, isDeleting, deleteTask }) => {
	const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
	const [taskIdToDelete, setTaskIdToDelete] = useState(null);
	const navigate = useNavigate();
	return (
		<>
			<button
				type="button"
				disabled={isDeleting}
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
					onClose={() => {
						setIsModalDeleteOpen(false);
					}}
					onDelete={() => {
						deleteTask(taskIdToDelete).then((response) => {
							setIsModalDeleteOpen(false);
							navigate('/');
						});
					}}
				/>
			}
		</>
	);
};
