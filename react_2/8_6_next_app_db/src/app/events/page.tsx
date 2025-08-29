'use client';

import { useSession } from 'next-auth/react';
import { trpc } from '@/shared/api';
import { EventList, StateEmpty, StateError, StateLoading } from '@/app/events/components';

export default function HomeClient() {
	const { data: session, status } = useSession();
	const isAuthenticated = status === 'authenticated';
	const { data: events, isLoading, isError } = trpc.event.findMany.useQuery();

	if (isLoading) return <StateLoading />;
	if (isError) return <StateError />;
	if (!events || events.length === 0) return <StateEmpty />;

	return <EventList events={events}
					  isAuthenticated={isAuthenticated} />;
}
