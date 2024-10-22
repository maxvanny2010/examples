import { useState } from 'react';
import { ModalDelete } from '../../modal/delete/ModalDelete.jsx';

export const ButtonDelete = ({ id, isDeleting, deleteTask }) => {
	const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
	const [taskIdToDelete, setTaskIdToDelete] = useState(null);
	return (
		<>
			<button
				type="button"
				disabled={isDeleting}
				onClick={(e) => {
					e.stopPropagation();
					setTaskIdToDelete(id);
					setIsModalDeleteOpen(true);
				}}
			>
				DELETE
			</button>
			{
				isModalDeleteOpen && <ModalDelete
					onClose={() => setIsModalDeleteOpen(false)}
					onDelete={() => {
						deleteTask(taskIdToDelete);
						setIsModalDeleteOpen(false);
					}}
				/>
			}
		</>
	);
};
