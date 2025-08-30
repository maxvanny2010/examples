'use client';

import { FaFrown } from 'react-icons/fa';

export const StateError = () => {
	return (
		<div className="sm:col-span-2 lg:col-span-4 text-center py-10">
			<p className="text-lg text-red-500 flex items-center justify-center gap-2">
				<FaFrown /> An error occurred while loading events.
			</p>
			<p className="text-slate-500 mt-2">Please try refreshing the page.</p>
		</div>
	);
};
