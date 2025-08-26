import React, { useState } from 'react';
import { SubmitHandler, useForm, UseFormRegisterReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormData, registerSchema, trpc } from '@/shared/api';
import { ROLES } from '@/shared/types';
import { useRouter } from 'next/navigation';
import { PATH } from '@/shared/path';
import { Alert } from '@/components';

interface InputFieldProps {
	label: string;
	id: string;
	type?: string;
	placeholder?: string;
	error?: string;
	register: UseFormRegisterReturn;
	children?: React.ReactNode;
}

const InputField = ({
						label,
						id,
						type = 'text',
						placeholder,
						error,
						register,
						children,
					}: InputFieldProps) => {
	return (
		<div className="mb-4">
			<label htmlFor={id}
				   className="block text-sm font-medium text-gray-700 mb-1">
				{label}
			</label>
			<div className="relative">
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					{...register}
					className={`w-full pl-3 pr-3 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 transition-all duration-200 ${
						error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
					}`}
				/>
				{children}
			</div>
			{error && <p className="text-sm text-red-600 mt-1">{error}</p>}
		</div>
	);
};

const RegisterForm = () => {
	const router = useRouter();
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema),
		mode: 'onBlur',
		defaultValues: { role: ROLES.USER },
	});

	// Используем хук мутации
	const registerMutation = trpc.auth.register.useMutation();

	const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
		setErrorMessage(null); // очищаем ошибку перед новой попыткой

		registerMutation.mutate(
			{
				name: data.name,
				email: data.email,
				password: data.password,
				role: ROLES.USER,
			},
			{
				onSuccess: (user) => {
					console.log('User created:', user);
					router.push(PATH.AUTH.SIGNIN);
				},
				onError: (error: any) => {
					if (error.message.includes('Unique constraint failed')) {
						setErrorMessage('This email is already registered.');
					} else {
						setErrorMessage('Registration error. Please try again later.');
					}
				},
			},
		);
	};

	return (
		<div className="flex items-center justify-center bg-gray-100 p-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
				{errorMessage && (
					<Alert onClose={() => setErrorMessage(null)}>
						{errorMessage}
					</Alert>
				)}
				<div className="text-center">
					<h1 className="text-4xl font-bold text-gray-800">Registration</h1>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}
					  className="space-y-4">
					<InputField label="Name"
								id="name"
								register={register('name')}
								error={errors.name?.message}
								placeholder="Your name" />
					<InputField label="Email"
								id="email"
								register={register('email')}
								error={errors.email?.message}
								placeholder="you@example.com" />
					<InputField label="Password"
								id="password"
								type="password"
								register={register('password')}
								error={errors.password?.message}
								placeholder="•••" />
					<InputField
						label="Confirm Password"
						id="confirmPassword"
						type="password"
						register={register('confirmPassword')}
						error={errors.confirmPassword?.message}
						placeholder="•••"
					/>

					<button
						type="submit"
						disabled={isSubmitting || registerMutation.isPending}
						className="w-full py-3 px-4 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all duration-200"
					>
						{registerMutation.isPending ? 'Registration...' : 'Register'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;
