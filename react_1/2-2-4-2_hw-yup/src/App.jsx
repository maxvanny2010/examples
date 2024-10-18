import { AppLayout } from './AppLayout.jsx';
import React, { useState } from 'react';
import * as yup from 'yup';

function sentFormData(data) {
	console.log(data);
}

const validateLoginSchema = yup
	.string()
	.required('Password is required.')
	.matches(/^[\w_]*$/, 'Login contains invalid characters')
	.max(20, 'Login is too long, 20 symbols')
	.min(3, 'Login is too short, 3symbols');

const validatePasswordSchema = yup
	.string()
	.required('Password is required.')
	.matches(/[A-Z]/, 'Please add one uppercase letter.')
	.matches(/[!@#$%^&*]/, 'Please add one special character.')
	.min(8, 'Password must be at least 8 characters.');

const validateRepeatPasswordSchema = yup.object().shape({
	password: yup.string(),
	passwordRepeat: yup.string()
		.required('Confirm Password is required.')
		.oneOf([yup.ref('password'), null], 'Passwords do not match.'),
});

const validateAndGetErrorMessage = async (schema, value) => {
	let errorMessage = null;
	try {
		await schema.validate(value, { abortEarly: false });
	} catch ({ errors }) {
		errorMessage = errors.join('\n');
	}
	return errorMessage;
};


export default function App() {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');
	const [loginError, setLoginError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [passwordRepeatedError, setPasswordRepeatedError] = useState('');

	const validationLoginOnChange = async ({ target }) => {
		setLogin(target.value);
		const newError = await validateAndGetErrorMessage(validateLoginSchema, target.value);
		setLoginError(newError);
	};

	const validationPasswordOnChange = async ({ target }) => {
		setPassword(target.value);
		const newError = await validateAndGetErrorMessage(validatePasswordSchema, target.value);
		setPasswordError(newError);
	};

	const validateRepeatPasswordOnBlur = async ({ target }) => {
		setPasswordRepeat(target.value);
		const newError = await validateAndGetErrorMessage(validateRepeatPasswordSchema, {
			password,
			passwordRepeat: target.value,
		});
		setPasswordRepeatedError(newError);
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		const newLoginError =
			await validateAndGetErrorMessage(validateLoginSchema, login);
		const newPasswordError =
			await validateAndGetErrorMessage(validatePasswordSchema, password);
		const newPasswordRepeatedError =
			await validateAndGetErrorMessage(validateRepeatPasswordSchema, { password, passwordRepeat });

		setLoginError(newLoginError);
		setPasswordError(newPasswordError);
		setPasswordRepeatedError(newPasswordRepeatedError);

		if (!newLoginError && !newPasswordError && !newPasswordRepeatedError) {
			sentFormData({ login, password });
			setLogin('');
			setPassword('');
			setPasswordRepeat('');
			setLoginError('');
			setPasswordError('');
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
			onValidateRepeatPasswordOnBlur={validateRepeatPasswordOnBlur}
			isSubmitDisabled={!isFormValid()}
		/>
	);
};



