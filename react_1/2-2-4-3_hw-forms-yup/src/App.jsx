import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React from 'react';
import { useForm } from 'react-hook-form';

import { AppLayout } from './AppLayout.jsx';

function sentFormData(data) {
	console.log(data);
}

const validateFormSchema = yup.object().shape({
	login: yup.string()
		.required('Password is required.')
		.matches(/^[\w_]*$/, 'Login contains invalid characters')
		.max(20, 'Login is too long, 20 characters')
		.min(3, 'Login is too short, 3 characters'),
	password: yup.string()
		.required('Password is required.')
		.matches(/[A-Z]/, 'Please add one uppercase letter.')
		.matches(/[!@#$%^&*]/, 'Please add one special character.')
		.min(8, 'Password must be at least 8 characters.'),
	passwordRepeat: yup.string()
		.required('Password confirmation is required.')
		.oneOf([yup.ref('password'), null], 'Passwords do not match.'),
	/*
	 passwordRepeat: yup.string()
    .required('Password confirmation is required.')
    .test('passwords-match', 'Passwords do not match.', function(value) {
     return this.parent.password === value;}),
    */
});

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors/*, isValid*/ },
		reset,
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passwordRepeat: '',
		},
		resolver: yupResolver(validateFormSchema),
		mode: 'onSubmit',
	});

	const onSubmit = (data) => {
		sentFormData({ data });
		reset();
	};
	/*console.log('isValid:', isValid);*/
	console.log('Errors:', errors);
	return (
		<AppLayout
			onSubmitForm={onSubmit}
			/*onIsValid={isValid}*/
			errors={errors}
			register={register}
			handleSubmit={handleSubmit}
		/>
	);
};



