'use client';
import React from 'react';

interface UserDeleteModalProps {
	name: string;
	onCancel: () => void;
	onConfirm: () => void;
}

export const UserDeleteModal = ({ name, onCancel, onConfirm }: UserDeleteModalProps) => {
	return (
		<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
				<h3 className="text-lg font-semibold mb-4 text-black">Remove {name}</h3>
				<p className="mb-6 text-gray-700">
					Are you sure you want to delete the <span className="font-medium">{name}</span>?
				</p>
				<div className="flex justify-end gap-3">
					<button
						onClick={onCancel}
						className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
					>
						Cancel
					</button>
					<button
						onClick={onConfirm}
						className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
};
