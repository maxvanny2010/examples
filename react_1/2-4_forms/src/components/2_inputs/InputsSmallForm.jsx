import styles from './Inputs.module.css';
import style from '../../index.module.css';
import React from 'react';

const sentFormData = (formData) => {
	console.log(formData);
};

export const InputsSmallForm = () => {
	const [email, setEmail] = React.useState('');
	const [login, setLogin] = React.useState('');
	const [password, setPassword] = React.useState('');
	const onSubmit = (event) => {
		event.preventDefault();
		sentFormData({ email, login, password });
	};
	return (
		<div className={style.block}>
			<label className={styles.label}>small Form</label>
			<form onSubmit={onSubmit}>
				<input
					name="email"
					type="email"
					placeholder={email}
					value={email}
					onChange=
						{
							({ target }) => setEmail(target.value)
						}
				/>
				<input
					name="login"
					type="login"
					placeholder={login}
					value={login}
					onChange=
						{
							({ target }) => setLogin(target.value)
						}
				/>

				<button className={styles.button}
						type="submit">Отправить
				</button>
			</form>
		</div>
	);
};



