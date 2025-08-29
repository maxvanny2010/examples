'use client';


import { CardEventSkeleton } from './CardEventSkeleton';

export const StateLoading = () => {
	return (
		<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{Array.from({ length: 8 }).map((_, index) => (
				<li key={index}>
					<CardEventSkeleton />
				</li>
			))}
		</ul>
	);
};
