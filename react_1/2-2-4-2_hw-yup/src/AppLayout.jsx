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
							  onValidateRepeatPasswordOnBlur,
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
				{onLoginError && <span className={style.labelError}>{onLoginError}</span>}
				<div className={style.inputField}>
					<input
						type="password"
						name="password"
						id="password"
						value={onPassword}
						placeholder="Enter Your Password"
						onChange={onValidationPasswordOnChange}
					/>
					<div className={style.underline}></div>
				</div>
				{onPasswordError && <span className={style.labelError}>{onPasswordError}</span>}

				<div className={style.inputField}>
					<input
						type="password"
						name="password_repeated"
						id="password_repeated"
						value={onPasswordRepeat}
						placeholder="Repeat Your Password"
						onChange={({ target: { value } }) => onSetPasswordRepeat(value)}
						onBlur={onValidateRepeatPasswordOnBlur}
					/>
					<div className={style.underline}></div>
				</div>
				{onPasswordRepeatError && <span className={style.labelError}>{onPasswordRepeatError}</span>}


				<input type="submit"
					   value="Continue"
					   disabled={isSubmitDisabled} />
			</form>
		</main>
	);
};
