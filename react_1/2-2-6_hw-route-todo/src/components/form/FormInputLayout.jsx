import style from './FormInput.module.css';
import { ToolTip } from '../tooltip/ToolTip.jsx';
import PropTypes from 'prop-types';

export const FormInputLayout = ({
									onSubmit,
									isCreating,
									onInput,
									setOnInput,
									errorMessage,
									handleSearch,
								}) => {
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
					value={onInput}
					onChange={
						(event) => {
							setOnInput(event.target.value);
							handleSearch(event);
						}
					}
				/>
				<button
					className={style.submitButton}
					type="submit"
					disabled={isCreating}
				>
					ADD TASK
				</button>
			</form>
			{errorMessage && <ToolTip errorMessage={errorMessage} />}
		</>
	);
};
FormInputLayout.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	isCreating: PropTypes.bool.isRequired,
	onInput: PropTypes.string.isRequired,
	setOnInput: PropTypes.func.isRequired,
	errorMessage: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
};
