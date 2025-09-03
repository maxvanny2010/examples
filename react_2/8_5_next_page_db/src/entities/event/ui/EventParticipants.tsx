'use client';

import {HiOutlineUsers} from 'react-icons/hi';
import {RouterOutput} from '@/shared/schema';

interface Props {
    participations: NonNullable<RouterOutput['event']['findUnique']>['participations'];
}

export const EventParticipants = ({participations}: Props) => {
    return (
        <section aria-labelledby="participants-heading">
            <div className="flex items-center gap-3 mb-6">
                <HiOutlineUsers className="h-6 w-6 text-current"/>
                <h2 id="participants-heading"
                    className="text-2xl font-bold text-slate-900">
                    Participants({participations.length})
                </h2>
            </div>

            {participations.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {participations.map(({user}) => (
                        <li key={user.id}
                            className="flex items-center gap-3 bg-slate-100 p-3 rounded-lg hover:bg-slate-200 transition-colors duration-200">
                            <div
                                className="w-10 h-10 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center font-bold shrink-0">
                                {user.name ? user.name.charAt(0).toUpperCase() : '👤'}
                            </div>
                            <span
                                className="font-medium text-slate-800 truncate">{user.name || 'Anonymous participant.'}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center py-8 px-4 bg-slate-100 rounded-lg border border-dashed">
                    <p className="text-slate-500">No one has joined yet. <br/> Be the first!</p>
                </div>
            )}
        </section>
    );
};
