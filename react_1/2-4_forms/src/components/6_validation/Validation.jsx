import { useState } from 'react';
import styles from './Validation.module.css';
import style from '../../index.module.css';

const sentFormData = (formData) => {
	console.log(formData);
};

export const Validation = () => {
	const [login, setLogin] = useState('');
	const [loginError, setLoginError] = useState(null);

	const onLoginChange = ({ target }) => {
		setLogin(target.value);
		let newError = null;
		if (!/^[\w_]*$/.test(target.value)) {
			newError = 'Login isn\'t correct';
		} else if (target.value.length > 20) {
			newError = 'Login is too long';
		}
		setLoginError(newError);
	};
	const onLoginBlur = ({ target }) => {
		if (target.value.length < 3) {
			setLoginError('Login must be greater than 3!');
		}
	};
	const onSubmit = (event) => {
		event.preventDefault();
		sentFormData(login);
	};
	return (
		<div className={style.block}>
			<label className={styles.label}>Validation</label>
			<form onSubmit={onSubmit}>
				{loginError && (<div className={styles.errorLabel}>{loginError}</div>)}
				<input
					type="text"
					name="login"
					value={login}
					onChange={onLoginChange}
					onBlur={onLoginBlur}
					placeholder="login"
				/>
				<button className={styles.button}
						type="submit"
						disabled={!!loginError}>Sent
				</button>
			</form>
		</div>
	);
};
