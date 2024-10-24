import styles from './ModalUpdateTask.module.css';
import PropTypes from 'prop-types';

export const ModalUpdateTask = ({
									todo,
									onClose,
									onUpdate,
								}) => {
	return (
		<div className={styles.modalOverlay}>
			<div className={styles.updateModal}>
				<form
					id="update"
					className={styles.formContainer}
					onSubmit={(e) => {
						e.preventDefault();
						onClose();
					}}
				>
					<div className={styles.modalButtons}>
						<input
							className={styles.inputField}
							name="task"
							type="text"
							value={todo.task}
							onChange={(e) => {
								onUpdate(e.target.value);
							}}
						/>
						<button
							className={`${styles.submitButton} ${styles.cancelButton}`}
							type="button"
							onClick={onClose}
						>
							Cancel
						</button>
						<button
							className={`${styles.submitButton} ${styles.confirmButton}`}
							type="submit"
						>
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
ModalUpdateTask.propTypes = {
	todo: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired,
};
