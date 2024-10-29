import styles from './ModalDelete.module.css';
import PropTypes from 'prop-types';

export const ModalDelete = ({
								onClose,
								onDelete,
							}) => {
	return (
		<div className={styles.modalOverlay}>
			<div className={styles.deleteModal}>
				<h3 className={styles.deleteModal__question}>
					Do you really want to delete this Task?
				</h3>
				<div className={styles.ModalButtons}>
					<button
						className={`${styles.SubmitButton} ${styles.cancelButton}`}
						onClick={onClose}
					>
						Cancel
					</button>
					<button
						className={`${styles.SubmitButton} ${styles.confirmButton}`}
						onClick={() => {
							onDelete();
							onClose();
						}}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

ModalDelete.propTypes = {
	onClose: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};
