import { AppLayout } from './AppLayout.jsx';
import React, { useState } from 'react';

function sentFormData(data) {
	console.log(data);
}

export default function App() {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');
	const [loginError, setLoginError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [passwordRepeatedError, setPasswordRepeatedError] = useState('');

	const validationLoginOnChange = ({ target }) => {
		const { value } = target;
		setLogin(value);
		let newError = null;
		if (!/^[\w_]*$/.test(value)) {
			newError = 'Login contains invalid characters';
		} else if (value.length > 20) {
			newError = 'Login is too long, 20 characters';
		} else if (value.length < 3) {
			newError = 'Login is too short, 3 characters';
		} else if (value === '') {
			newError = 'Login is required';
		}
		setLoginError(newError);
	};
	const validationPasswordOnChange = ({ target }) => {
		const { value } = target;
		setPassword(value);
		console.log('p1 ' + value);
		let newError = null;
		if (value.length < 8) {
			newError = 'Password must be at least 8 characters..';
		} else if (!/[A-Z]/.test(value)) {
			newError = 'Please add one uppercase letter.';
		} else if (!/[!@#$%^&*]/.test(value)) {
			newError = 'Please add one special character.';
		} else if (value === '') {
			newError = 'Password is required';
		}
		setPasswordError(newError);
	};
	const validationPasswordRepeatedOnBlur = ({ target }) => {
		const { value } = target;
		setPasswordRepeatedError(password !== value ? 'Passwords do not match.' : '');
	};
	const onSubmit = (event) => {
		event.preventDefault();
		if (isFormValid()) {
			sentFormData({ login, password });
			setLoginError('');
			setLogin('');
			setPassword('');
			setPasswordRepeat('');
			setPasswordRepeatedError('');
		}
	};
	const isFormValid = () => {
		return (
			login.trim() !== '' &&
			password.trim() !== '' &&
			passwordRepeat.trim() !== '' &&
			!loginError &&
			!passwordError &&
			!passwordRepeatedError
		);
	};
	return (
		<AppLayout
			onLogin={login}
			onPassword={password}
			onSubmitForm={onSubmit}
			onSetPassword={setPassword}
			onPasswordRepeat={passwordRepeat}
			onSetPasswordRepeat={setPasswordRepeat}
			onLoginError={loginError}
			onPasswordError={passwordError}
			onPasswordRepeatError={passwordRepeatedError}
			onValidationLoginOnChange={validationLoginOnChange}
			onValidationPasswordOnChange={validationPasswordOnChange}
			onValidationPasswordRepeatedOnBlur={validationPasswordRepeatedOnBlur}
			isSubmitDisabled={!isFormValid()}
		/>
	);
};



