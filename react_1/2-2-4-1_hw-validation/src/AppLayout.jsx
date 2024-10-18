import React from 'react';
import style from './AppLayout.module.css';

export const AppLayout = ({
							  onLogin,
							  onPassword,
							  onSubmitForm,
							  onSetPassword,
							  onPasswordRepeat,
							  onSetPasswordRepeat,
							  onLoginError,
							  onPasswordError,
							  onPasswordRepeatError,
							  onValidationLoginOnChange,
							  onValidationPasswordOnChange,
							  onValidationPasswordRepeatedOnBlur,
							  isSubmitDisabled,
						  }) => {
	return (
		<main className={style.container}>
			<h2>Login</h2>
			<form
				onSubmit={onSubmitForm}>
				<div className={style.inputField}>
					<input
						type="text"
						name="login"
						id="login"
						value={onLogin}
						placeholder="Enter Your Login"
						onChange={onValidationLoginOnChange}
					/>
					<div className={style.underline}></div>
				</div>
				{onLoginError && <div className={style.labelError}>{onLoginError}</div>}
				<div className={style.inputField}>
					<input
						type="password"
						name="password"
						id="password"
						value={onPassword}
						placeholder="Enter Your Password"
						onChange={({ target: { value } }) => onSetPassword(value)}
						onBlur={onValidationPasswordOnChange}
					/>
					<div className={style.underline}></div>
				</div>
				{onPasswordError && <div className={style.labelError}>{onPasswordError}</div>}

				<div className={style.inputField}>
					<input
						type="password"
						name="password_repeated"
						id="password_repeated"
						value={onPasswordRepeat}
						placeholder="Repeat Your Password"
						onChange={({ target: { value } }) => onSetPasswordRepeat(value)}
						onBlur={onValidationPasswordRepeatedOnBlur}
					/>
					<div className={style.underline}></div>
				</div>
				{onPasswordRepeatError && <div className={style.labelError}>{onPasswordRepeatError}</div>}


				<input type="submit"
					   value="Continue"
					   disabled={isSubmitDisabled} />
			</form>
		</main>
	);
};
