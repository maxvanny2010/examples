import styles from './ModalUpdate.module.css';

export const ModalUpdateTask = ({
									taskToUpdate,
									setTaskToUpdate,
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
						onUpdate(taskToUpdate);
						onClose();
					}}
				>
					<div className={styles.modalButtons}>
						<input
							className={styles.inputField}
							name="task"
							type="text"
							value={taskToUpdate}
							onChange={(e) => {
								setTaskToUpdate(e.target.value);
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
