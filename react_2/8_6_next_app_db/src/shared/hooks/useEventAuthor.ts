'use client';

import { PATH } from '@/shared/path';
import { usePathname } from 'next/navigation';
import { trpc } from '@/shared/api';

export function useEventAuthor(eventId?: number) {
	const pathname = usePathname();

	const isDetailPage =
		Boolean(eventId) && pathname === `${PATH.EVENTS.ROOT}/${eventId}`;

	const eventQuery = trpc.event.findUnique.useQuery(
		{ id: eventId! },
		{ enabled: isDetailPage && Boolean(eventId) }, // запрос только на детальной
	);

	return {
		authorId: eventQuery.data?.authorId ?? null,
		isDetailPage,
		isLoading: eventQuery.isLoading,
		error: eventQuery.error,
	};
}
