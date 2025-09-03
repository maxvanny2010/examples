'use client';
import React from 'react';

interface AlertProps {
	children: React.ReactNode;
	onClose: () => void;
}

export const Alert = ({ children, onClose }: AlertProps) => {
	return (
		<div
			className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md relative"
			role="alert"
		>
			<span className="block sm:inline">{children}</span>
			<button onClick={onClose}
					className="absolute top-0 bottom-0 right-0 px-4 py-3"
					aria-label="Close">
				<span className="text-2xl">&times;</span>
			</button>
		</div>
	);
};
