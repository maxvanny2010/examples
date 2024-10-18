import React from 'react';
import style from './AppLayout.module.css';

export const AppLayout = ({
							  onSubmitForm,
							  /*onIsValid,*/
							  errors,
							  register,
							  handleSubmit,

						  }) => {
	return (
		<main className={style.container}>
			<h2>Login</h2>
			<form
				onSubmit={handleSubmit(onSubmitForm)}
			>
				<div className={style.inputField}>
					<input
						type="text"
						name="login"
						id="login"
						placeholder="Enter Your Login"
						{...register('login')}
					/>
					<div className={style.underline}></div>
				</div>
				{errors.login && <span className={style.labelError}>{errors.login.message}</span>}
				<div className={style.inputField}>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Enter Your Password"
						{...register('password')}
					/>
					<div className={style.underline}></div>
				</div>
				{errors.password && <span className={style.labelError}>{errors.password.message}</span>}

				<div className={style.inputField}>
					<input
						type="password"
						name="password_repeated"
						id="password_repeated"
						placeholder="Repeat Your Password"
						{...register('passwordRepeat')}
					/>
					<div className={style.underline}></div>
				</div>
				{errors.passwordRepeat && <span className={style.labelError}>{errors.passwordRepeat.message}</span>}


				<input type="submit"
					   value="Continue"
					/* disabled={!onIsValid}*/ />
			</form>
		</main>
	);
};
