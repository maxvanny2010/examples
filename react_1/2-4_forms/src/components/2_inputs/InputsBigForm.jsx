import styles from './Inputs.module.css';
import style from '../../index.module.css';
import { useState } from 'react';

const sentFormData = (formData) => {
	console.log(formData);
};

export const InputsBigForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		login: '',
		password: '',
	});

	const onSubmit = (event) => {
		event.preventDefault();
		sentFormData(formData);
	};
	const { email, login, password } = formData;

	return (
		<div className={style.block}>
			<label className={styles.label}>big Form</label>
			<form onSubmit={onSubmit}>
				<input
					name="email"
					type="email"
					placeholder={email}
					value={email}
					onChange=
						{
							({ target }) => setFormData({
								...formData,
								email: target.value,
							})
						}
				/>
				<input
					name="login"
					type="login"
					placeholder={login}
					value={login}
					onChange=
						{
							({ target }) => setFormData({
								...formData,
								login: target.value,
							})
						}
				/>

				<button className={styles.button}
						type="submit">Отправить
				</button>
			</form>
		</div>
	);
};



