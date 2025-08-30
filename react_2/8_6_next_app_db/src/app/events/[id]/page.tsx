import { GetServerSidePropsContext } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { trpc } from '@/shared/api';
import prisma from '@/server/core/db';
import { useLogout } from '@/shared/contexts';
import { MESSAGES, pathImage, sizeImage } from '@/shared/util';
import { EventDetail } from '@/entities/event';
import { SkeletonEventDetail } from '@/entities/event/skeletons';

export default function EventDetailPage() {
	const { status } = useSession();
	const { isLoggingOut } = useLogout();
	const router = useRouter();

	const id = router.query.id;
	const idNumber = typeof id === 'string' ? Number(id) : undefined;

	const { data, isLoading, error } = trpc.event.findUnique.useQuery(
		{ id: idNumber! },
		{ enabled: Boolean(idNumber) },
	);

	if (isLoggingOut || !idNumber || status === 'loading' || isLoading) return <SkeletonEventDetail />;

	if (error) return <p>Mistake: {error.message}</p>;

	if (!data) return <p>{MESSAGES.EVENT_NOT_FOUND}</p>;

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
