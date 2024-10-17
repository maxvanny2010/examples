import * as yup from 'yup';
import { useState } from 'react';
import styles from './ValidationYup.module.css';
import style from '../../index.module.css';

const sentFormData = (formData) => {
	console.log(formData);
};

const validateLoginChangeSchema = yup
	.string()
	.matches(/^[\w_]*$/, 'Login isn\'t correct')
	.max(20, 'Login must be at most 20 symbols');

const validateLoginBlurSchema = yup.string()
	.min(3, 'Login must be at least 3 symbols');

const validateAndGetErrorMessage = (schema, value) => {
	let errorMessage = null;
	try {
		schema.validateSync(value, { abortEarly: false });
	} catch ({ errors }) {
		errorMessage = errors.join('\n');
		/*errorMessage = errors
			.reduce((message, error) => message + error + '\n', '');*/
	}
	return errorMessage;
};

export const ValidationYup = () => {
	const [login, setLogin] = useState('');
	const [loginError, setLoginError] = useState(null);

	const onLoginChange = ({ target }) => {
		setLogin(target.value);
		const newError = validateAndGetErrorMessage(validateLoginChangeSchema, target.value);
		setLoginError(newError);
	};

	const onLoginBlur = ({ target }) => {
		const newError = validateAndGetErrorMessage(validateLoginBlurSchema, target.value);
		setLoginError(newError);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		!loginError && sentFormData({ login });
	};

	return (
		<div className={style.block}>
			<label className={styles.label}>Yup</label>
			{
				loginError && (<div className={styles.errorLabel}>{loginError}</div>)
			}
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="login"
					value={login}
					onChange={onLoginChange}
					onBlur={onLoginBlur}
					placeholder="Login"
				/>
				<button className={styles.button}
						type="submit"
						disabled={loginError}>
					Yup
				</button>
			</form>
		</div>
	);
};
