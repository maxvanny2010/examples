import styles from './Hook.module.css';
import style from '../../index.module.css';
import { useStore } from './UseStore.jsx';

const sentFormData = (formData) => {
	console.log(formData);
};

export const InputsForStore1 = () => {
	const { getState, updateState } = useStore();

	const onSubmit = (event) => {
		event.preventDefault();
		sentFormData(getState());
	};
	const { email, login, password } = getState();

	return (
		<div className={style.block}>
			<label>Store 1</label>
			<form onSubmit={onSubmit}>
				<input
					name="email"
					type="email"
					placeholder={email}
					value={email}
					onChange=
						{
							({ target }) => updateState(
								'email',
								target.value,
							)
						}
				/>
				<input
					name="login"
					type="login"
					placeholder={login}
					value={login}
					onChange=
						{
							({ target }) => updateState(
								'login',
								target.value,
							)
						}
				/>

				<button className={styles.button}
						type="submit">Отправить
				</button>
			</form>
		</div>
	);
};



