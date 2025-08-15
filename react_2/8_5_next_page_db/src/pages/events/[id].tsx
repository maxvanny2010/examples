import { useRouter } from 'next/router';
import { trpc } from '@/shared/api';
import { EventDetail, EventDetailSkeleton } from '@/entities/event';
import { pathImage, sizeImage } from '@/util';

export default function EventDetailPage() {
	const router = useRouter();

	let id = router.query.id;
	const randomImg = `${pathImage}${id}${sizeImage}`;
	const { data, isLoading } = trpc.event.findUnique.useQuery({ id: Number(id) });
	if (isLoading) return <EventDetailSkeleton />;
	if (!data) return <p>Событие не найдено</p>;

	return (
		<EventDetail data={data}
					 image={randomImg} />
	);
}
