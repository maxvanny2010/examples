import { useForm } from 'react-hook-form';
import style from './HookForm.module.css';
import styles from '../../index.module.css';

const sendFormData = (formData) => {
	console.log(formData);
};
export const HookForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm(
		{
			defaultValues: {
				login: '',
			},
			/*	mode: 'onChange'*/
		});
	const loginProps = {
		required: { value: true, message: 'Login is required' },
		minLength: { value: 3, message: 'Minimum Length' },
		maxLength: { value: 20, message: 'Maximum Length' },
		pattern: {
			value: /^[\w_]*$/,
			message: 'Pattern not correct',
		},
	};
	const loginError = errors.login?.message;
	return (
		<div className={styles.block}>
			<label className={style.label}>Hook Forms</label>
			<form onSubmit={handleSubmit(sendFormData)}>
				{loginError && (<div className={style.errorLabel}>{loginError}</div>)}
				<input
					type="text"
					name="login"
					{...register('login', loginProps)}
				/>
				<button className={style.button}
						type="submit"
						disabled={!!errors.login}>Send
				</button>
			</form>
		</div>
	);
};
