'use client';

import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { SkeletonEventDetail } from '@/entities/event/skeletons';
import { MESSAGES } from '@/shared/util';
import { trpc } from '@/shared/api';
import { useLogout } from '@/shared/contexts';
import { EventDetailClient } from './EventDetailClient';
import { StateEmpty, StateError } from '@/entities/event/state';

export default function EventDetailPage() {
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
	);

	if (isLoggingOut || status === 'loading' || isLoading) return <SkeletonEventDetail />;
	if (error) return <StateError message={error.message} />;
	if (!data) return <StateEmpty />;

	return <EventDetailClient event={data}
							  eventId={idParam} />;
}
