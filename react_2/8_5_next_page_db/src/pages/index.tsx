import { trpc } from '@/shared/api';
import { EventCard } from '@/entities/event/ui/card';
import { JoinEventButton } from '@/features/join-event';

export default function Home() {
	const { data } = trpc.event.findMany.useQuery();

	return (
		<div className="min-h-screen bg-gray-100 flex justify-center">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
				{
					data?.map((event) => (
						<li key={event.id}>
							<EventCard
								{...event}
								action={<JoinEventButton eventId={event.id} />} /></li>
					))
				}
			</div>
		</div>
	);
}