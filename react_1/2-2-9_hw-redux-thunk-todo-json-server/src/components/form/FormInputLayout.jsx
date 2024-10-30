import style from './FormInput.module.css';
import { ToolTip } from '../tooltip/ToolTip.jsx';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const FormInputLayout = ({
									onSubmit,
									handleSearch,
								}) => {
	const errorMessage = useSelector(state => state.stateError.errors)[0];
	const input = useSelector(state => state.stateSearchTodo.task);

	return (
		<>
			<form
				id="create"
				className={style.formContainer}
				onSubmit={onSubmit}>
				<input
					id="input"
					className={style.inputField}
					type="text"
					value={input}
					onChange={
						(event) => {
							handleSearch(event);
						}
					}
				/>
				<button
					className={style.submitButton}
					type="submit"
				>
					ADD TASK
				</button>
			</form>
			{errorMessage && <ToolTip />}
		</>
	);
};
FormInputLayout.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	handleSearch: PropTypes.func.isRequired,
};
