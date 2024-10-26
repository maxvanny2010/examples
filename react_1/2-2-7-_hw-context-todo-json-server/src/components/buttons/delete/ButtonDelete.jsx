import { useContext, useState } from 'react';
import { ModalDelete } from '../../modal/delete/ModalDelete.jsx';
import { RequestsContext, RequestsStatusContext, TodoContext } from '../../context/indexContext.jsx';

export const ButtonDelete = () => {
	const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
	const { isDeleting } = useContext(RequestsStatusContext);
	const { deleteTask } = useContext(RequestsContext);
	const { id } = useContext(TodoContext);

	return (
		<>
			<button
				type="button"
				disabled={isDeleting}
				onClick={(e) => {
					e.stopPropagation();
					setIsModalDeleteOpen(true);
				}}
			>
				DELETE
			</button>
			{
				isModalDeleteOpen && <ModalDelete
					onClose={() => setIsModalDeleteOpen(false)}
					onDelete={() => {
						deleteTask(id);
						setIsModalDeleteOpen(false);
					}}
				/>
			}
		</>
	);
};

