import styles from './Hook.module.css';
import style from '../../index.module.css';
import { useStore } from './UseStore.jsx';

const sentFormData = (formData) => {
	console.log(formData);
};

export const InputsForStore2 = () => {
	const { getState, updateState } = useStore();

	const onSubmit = (event) => {
		event.preventDefault();
		sentFormData(getState());
	};
	const { email, login, password } = getState();

	const onChange = ({ target }) => updateState(target.name, target.value);

	return (
		<div className={style.block}>
			<label>Store 2</label>
			<form onSubmit={onSubmit}>
				<input
					name="email"
					type="email"
					placeholder={email}
					value={email}
					onChange={onChange}
				/>
				<input
					name="login"
					type="login"
					placeholder={login}
					value={login}
					onChange={onChange}
				/>

				<button className={styles.button}
						type="submit">Отправить
				</button>
			</form>
		</div>
	);
};



