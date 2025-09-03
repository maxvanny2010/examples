'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterFormData, registerSchema } from '@/shared/schema';
import { trpc } from '@/shared/api';
import { Alert, InputField } from '@/shared/ui';
import { CODE, MESSAGES, trpcError } from '@/shared/util';
import { PATH } from '@/shared/path';
import { ROLES } from '@/shared/types';

export default function RegisterForm() {
	const router = useRouter();
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const { register, handleSubmit, formState: { errors, isSubmitting } } =
		useForm<RegisterFormData>({
			resolver: zodResolver(registerSchema),
			mode: 'onBlur',
			defaultValues: { role: ROLES.USER },
		});

	const registerMutation = trpc.auth.register.useMutation();

	const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
		setErrorMessage(null);
		const { confirmPassword, ...payload } = data;

		registerMutation.mutate(payload, {
			onSuccess: () => router.push(PATH.AUTH.SIGNIN),
			onError: (error) => {
				setErrorMessage(
					trpcError(error, {
						[CODE.CONFLICT]: MESSAGES.USER_ALREADY_REGISTERED,
					}, MESSAGES.USER_ERROR_REGISTRATION),
				);
			},
		});
	};

	return (
		<div className="flex items-center justify-center p-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
				{errorMessage && <Alert onClose={() => setErrorMessage(null)}>{errorMessage}</Alert>}
				<h1 className="text-4xl font-bold text-gray-800 text-center">Registration</h1>

				<form onSubmit={handleSubmit(onSubmit)}
					  className="space-y-4">
					<InputField
						label="Name"
						id="name"
						icon={<FiUser />}
						register={register('name')}
						error={errors.name?.message}
						placeholder="Your name"
					/>

					<InputField
						label="Email"
						id="email"
						icon={<FiMail />}
						register={register('email')}
						error={errors.email?.message}
						placeholder="you@example.com"
					/>

					<InputField
						label="Password"
						id="password"
						type="password"
						icon={<FiLock />}
						register={register('password')}
						error={errors.password?.message}
						placeholder="•••"
					/>

					<InputField
						label="Confirm Password"
						id="confirmPassword"
						type="password"
						icon={<FiLock />}
						register={register('confirmPassword')}
						error={errors.confirmPassword?.message}
						placeholder="•••"
					/>

					<button
						type="submit"
						disabled={isSubmitting || registerMutation.isPending}
						className="w-full py-3 px-4 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all duration-200"
					>
						{registerMutation.isPending ? 'Registering...' : 'Register'}
					</button>
				</form>
			</div>
		</div>
	);
}
