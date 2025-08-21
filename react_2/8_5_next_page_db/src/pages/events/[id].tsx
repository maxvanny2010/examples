import { useRouter } from 'next/router';
import { trpc } from '@/shared/api';
import { EventDetail, EventDetailSkeleton } from '@/entities/event';
import { pathImage, sizeImage } from '@/util';
import { useSession } from 'next-auth/react';
import { TRPCClientError } from '@trpc/client';
import ForbiddenPage from '@/pages/events/forbidden';
import { useLogout } from '@/shared/contexts';

export default function EventDetailPage() {
	const { status } = useSession();
	const { isLoggingOut } = useLogout();
	const router = useRouter();

	const id = router.query.id;
	const idNumber = typeof id === 'string' ? Number(id) : undefined;

	const { data, isLoading, error } = trpc.event.findUnique.useQuery(
		{ id: idNumber! },
		{ enabled: status === 'authenticated' /*staleTime: 1000 * 60 */ },
	);
	// Если логируемся → сразу показываем скелетон, чтобы не показывать Forbidden
	if (isLoggingOut) return <EventDetailSkeleton />;

	// Если id ещё нет → скелетон
	if (!idNumber) return <EventDetailSkeleton />;

	// Если авторизация загружается → скелетон
	if (status === 'loading') return <EventDetailSkeleton />;

	// Если явно неавторизован → Forbidden
	if (status === 'unauthenticated') return <ForbiddenPage />;


	const randomImg = `${pathImage}${id}${sizeImage}`;

	if (isLoading) return <EventDetailSkeleton />;

	if (error) {
		if ((error as TRPCClientError<any>).data?.httpStatus === 401) {
			return <ForbiddenPage />;
		}
		return <p>Ошибка: {error.message}</p>;
	}

	if (!data) return <p>Событие не найдено</p>;

	return <EventDetail data={data}
						image={randomImg} />;
}
