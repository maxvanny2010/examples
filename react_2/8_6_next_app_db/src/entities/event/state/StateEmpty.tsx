'use client';

import { FaCalendarAlt } from 'react-icons/fa';

export const StateEmpty = () => {
	return (
		<div className="sm:col-span-2 lg:col-span-4 text-center py-10">
			<p className="text-lg text-slate-700 flex items-center justify-center gap-2">
				<FaCalendarAlt /> No available events yet.
			</p>
			<p className="text-slate-500 mt-2">Check back later!</p>
		</div>
	);
};
