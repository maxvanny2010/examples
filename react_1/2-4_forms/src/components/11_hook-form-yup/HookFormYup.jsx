import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import style from './HookFormYup.module.css';
import styles from '../../index.module.css';

const sendFormData = (formData) => {
	console.log(formData);
};

const fieldsSchema = yup.object().shape({
	login: yup.string()
		.matches(/^[\w_-]*$/, 'Login is not correct')
		.min(3, 'Login must be at least 3 symbols')
		.max(20, 'Login must be at most 20 symbols')
		.required('Login is required'),
});

export const HookFormYup = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
		},
		resolver: yupResolver(fieldsSchema),
		mode: 'onChange',
	});

	const loginError = errors.login?.message;
	return (
		<div className={styles.block}>
			<label className={style.label}>Hook Form Yup</label>
			<form onSubmit={handleSubmit(sendFormData)}>
				{loginError && (<div className={style.errorLabel}>{loginError}</div>)}
				<input
					type="text"
					name="login"
					{...register('login')}
				/>
				<button
					type="submit"
					className={style.button}
					disabled={loginError}
				>
					Send
				</button>
			</form>
		</div>
	);
};
