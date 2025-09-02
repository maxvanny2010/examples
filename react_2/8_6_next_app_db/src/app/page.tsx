'use client';

import { useSession } from 'next-auth/react';
import { StateEmpty, StateError, StateLoading } from '@/entities/event/state';
import { EventList } from '@/entities/event/EventList';
import { trpc } from '@/shared/api';

export default function Home() {
	const { status } = useSession();
	const isAuthenticated = status === 'authenticated';

	const { data: events, isLoading, isError } = trpc.event.findMany.useQuery();
	if (isLoading) return <StateLoading />;
	if (isError) return <StateError />;
	if (!events || events.length === 0) return <StateEmpty />;

	return (
		<main className="min-h-screen bg-slate-50">
			<div className="container mx-auto px-4 py-12">
				<header className="mb-8 text-center">
					<h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
						Upcoming Events
					</h1>
					<p className="mt-2 text-lg text-slate-600">
						Join our events and be at the heart of the action
					</p>
				</header>

				<EventList events={events}
						   isAuthenticated={isAuthenticated} />
			</div>
		</main>
	);
}
