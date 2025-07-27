'use client';

import React from 'react';

export default function LoadingSpinner({ text = 'Loading...' }: { text?: string }) {
	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="flex flex-col items-center space-y-4">
				<div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
				<p className="text-gray-600 text-lg font-medium">{text}</p>
			</div>
		</div>
	);
}
