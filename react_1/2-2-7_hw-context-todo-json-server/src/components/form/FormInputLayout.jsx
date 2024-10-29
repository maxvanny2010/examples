import style from './FormInput.module.css';
import { ToolTip } from '../tooltip/ToolTip.jsx';
import { useContext } from 'react';
import { AppContext, FunctionContext, RequestsStatusContext } from '../context/indexContext.jsx';

export const FormInputLayout = () => {
	const { isCreating } = useContext(RequestsStatusContext);
	const { onSubmit, setInput, handleSearch } = useContext(FunctionContext);
	const { input, errorMessage } = useContext(AppContext);
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
							setInput(event.target.value);
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
			{errorMessage && <ToolTip />}
		</>
	);
};
