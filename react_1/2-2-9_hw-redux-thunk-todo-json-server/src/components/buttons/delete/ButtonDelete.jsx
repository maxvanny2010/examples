import { useState } from 'react';
import { ModalDelete } from '../../modal/delete/ModalDelete.jsx';
import { useDispatch } from 'react-redux';
import { deleteTaskAsync } from '../../../actions/actionTask.jsx';
import PropTypes from 'prop-types';

export const ButtonDelete = ({ todo }) => {
	const dispatch = useDispatch();
	const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
	return (
		<>
			<button
				type="button"
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
						dispatch(deleteTaskAsync(todo.id));
						setIsModalDeleteOpen(false);
					}}
				/>
			}
		</>
	);
};
ButtonDelete.propTypes = {
	todo: PropTypes.object.isRequired,
};
