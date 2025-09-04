'use client';

import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { MESSAGES } from '@/shared/util';
import { useLogout } from '@/shared/contexts';
import { trpc } from '@/shared/schema';
import { EventDetailsSkeleton } from '@/entities/event';
import { StateEmpty, StateError } from '@/entities/event/ui/state';
import { EventDetailClient } from '@/entities/event/ui/EventDetailClient';

export default function EventDetailsPage() {
	const { isLoggingOut } = useLogout();
	const { status } = useSession();
	const params = useParams();
	const idParam = params?.id;

	if (!idParam || Array.isArray(idParam)) {
		return <p>{MESSAGES.EVENT_NOT_CORRECT_ID}</p>;
	}

	const idNumber = Number(idParam);
	if (Number.isNaN(idNumber)) {
		return <p>{MESSAGES.EVENT_NOT_CORRECT_ID}</p>;
	}

	const { data, isLoading, error } = trpc.event.findUnique.useQuery(
		{ id: idNumber },
		{ enabled: true },
	);

	if (isLoggingOut || status === 'loading' || isLoading) return <EventDetailsSkeleton />;
	if (error) return <StateError message={error.message} />;
	if (!data) return <StateEmpty />;

	return <EventDetailClient event={data}
							  eventId={idParam} />;
};