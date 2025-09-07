'use client';

import { HiOutlineUser, HiOutlineUsers } from 'react-icons/hi';
import type { RouterOutput } from '@/shared/api';

interface Props {
	participations: NonNullable<RouterOutput['event']['findUnique']>['participations'] | undefined | null;
}

export const EventParticipants = ({ participations }: Props) => {
	const count = participations?.length || 0;

	return (
		<section aria-labelledby="participants-heading">
			<div className="flex items-center gap-3 mb-6">
				<HiOutlineUsers className="h-6 w-6 text-current" />
				<h2 id="participants-heading"
					className="text-2xl font-bold text-slate-900">
					Participants({count})
				</h2>
			</div>

			{count > 0 ? (
				<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{participations?.map(({ user }) => (
						<li key={user.id}
							className="flex items-center gap-3 bg-slate-100 p-3 rounded-lg hover:bg-slate-200 transition-colors duration-200">
							<div className="w-10 h-10 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center font-bold shrink-0">
								{user.name ? user.name.charAt(0).toUpperCase() : <HiOutlineUser className="w-6 h-6" />}
							</div>
							<span className="font-medium text-slate-800 truncate">{user.name || 'Anonymous participant.'}</span>
						</li>
					))}
				</ul>
			) : (
				<div className="text-center py-8 px-4 bg-slate-100 rounded-lg border border-dashed">
					<p className="text-slate-500">No one has joined yet. <br /> Be the first!</p>
				</div>
			)}
		</section>
	);
};
