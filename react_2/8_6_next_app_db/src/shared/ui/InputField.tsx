'use client';

import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps {
	label: string;
	id: string;
	type?: string;
	placeholder?: string;
	icon?: React.ReactNode;
	error?: string;
	register: UseFormRegisterReturn;
	autoComplete?: string;
	children?: React.ReactNode;
}

export const InputField = ({
							   label,
							   id,
							   type = 'text',
							   placeholder,
							   icon,
							   error,
							   register,
							   autoComplete,
							   children,
						   }: InputFieldProps) => (
	<div className="mb-4">
		<label htmlFor={id}
			   className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
		<div className="relative">
			{icon &&
				<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none">{icon}</span>}
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				autoComplete={autoComplete}
				{...register}
				className={`w-full pl-10 pr-10 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 transition-all duration-200 ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}`}
			/>
			{children}
		</div>
		{error && <p className="text-sm text-red-600 mt-1">{error}</p>}
	</div>
);
