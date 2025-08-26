import { useRouter } from 'next/router';
import { trpc } from '@/shared/api';
import { EventDetail, EventDetailSkeleton } from '@/entities/event';
import { pathImage, sizeImage } from '@/util';
import { useSession } from 'next-auth/react';
import { useLogout } from '@/shared/contexts';
import { GetServerSidePropsContext } from 'next';
import prisma from '@/server/db';

export default function EventDetailPage() {
	const { status } = useSession();
	const { isLoggingOut } = useLogout();
	const router = useRouter();

	const id = router.query.id;
	const idNumber = typeof id === 'string' ? Number(id) : undefined;

	const { data, isLoading, error } = trpc.event.findUnique.useQuery(
		{ id: idNumber! },
		{ enabled: Boolean(idNumber) }
	);

	// Пока идёт логин/логаут или нет id → показываем скелетон
	if (isLoggingOut || !idNumber || status === 'loading' || isLoading) return <EventDetailSkeleton />;

	// Обработка ошибки запроса
	if (error) return <p>Ошибка: {error.message}</p>;

	// Если события нет → сообщение
	if (!data) return <p>Событие не найдено</p>;

	const randomImg = `${pathImage}${id}${sizeImage}`;

	return (
		<EventDetail
			data={data}
			image={randomImg}
		/>
	);
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
	const id = context.params?.id as string;
	const event = await prisma.event.findUnique({ where: { id: Number(id) } });

	if (!event) {
		return { notFound: true };
	}

	return {
		props: {
			event: {
				...event,
				createdAt: event.createdAt.toISOString(),
				updatedAt: event.updatedAt.toISOString(),
				eventDate: event.updatedAt.toISOString(),
			},
			eventAuthorId: event.authorId,
		},
	};
}
