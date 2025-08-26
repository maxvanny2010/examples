import { UseFormRegisterReturn } from 'react-hook-form';
import React from 'react';

interface InputFieldProps {
	label: string;
	id: string;
	type?: string;
	placeholder?: string;
	error?: string;
	register: UseFormRegisterReturn;
	children?: React.ReactNode;
}

export const InputField = ({
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