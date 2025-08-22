import { useState } from 'react';
import { useRouter } from 'next/router';
import { EventForm } from '@/features/event-form';
import { Alert } from '@/components';
import { EVENT_MODE } from '@/shared/types';
import type { EditEventInput } from '@/shared/api';
import { trpc } from '@/shared/api';
import { PATH } from '@/shared/path';
import { DateTime } from 'luxon';
import { EventDetailSkeleton } from '@/entities/event';

export default function EditEvent() {
	const [mutationError, setMutationError] = useState<string | null>(null);
	const utils = trpc.useUtils();
	const router = useRouter();
	const { id } = router.query;

	// Приводим id к числу и проверяем
	const eventId = Array.isArray(id) ? id[0] : id;
	const numericEventId = eventId ? Number(eventId) : null;
	if (numericEventId === null || Number.isNaN(numericEventId)) {
		return <p>Неверный ID события</p>;
	}

	const { data: event } = trpc.event.getById.useQuery(
		{ id: numericEventId },
		{ enabled: !!numericEventId },
	);

	const updateEvent = trpc.event.update.useMutation({
		onMutate: async (newData) => {
			if (!newData.id) return;
			const idx = newData.id;

			await utils.event.getById.cancel({ id: idx });
			await utils.event.findMany.cancel();

			const previousEvent = utils.event.getById.getData({ id: idx });
			const previousList = utils.event.findMany.getData();

			// Если даты нет — оставляем undefined
			const newEventDate = newData.eventDate ? new Date(newData.eventDate) : undefined;

			utils.event.getById.setData({ id: idx }, (old) =>
				old
					? {
						...old,
						title: newData.title,
						description: newData.description ?? null,
						eventDate: newEventDate ?? old.eventDate,
					}
					: old,
			);

			if (previousList) {
				utils.event.findMany.setData(undefined, (oldList) =>
					oldList?.map((ev) =>
						ev.id === idx
							? {
								...ev,
								title: newData.title,
								description: newData.description ?? null,
								eventDate: newEventDate ?? ev.eventDate,
							}
							: ev,
					) ?? oldList,
				);
			}

			return { previousEvent, previousList };
		},

		onError: (err, newData, context) => {
			if (!newData.id) return;
			const idx = newData.id;

			// откат
			if (context?.previousEvent) utils.event.getById.setData({ id: idx }, context.previousEvent);
			if (context?.previousList) utils.event.findMany.setData(undefined, context.previousList);

			setMutationError(err.message);
		},
		onSettled: (_data, _error, variables) => {
			if (variables.id) {
				utils.event.getById.invalidate({ id: variables.id }).then(r => r);
				utils.event.findMany.invalidate().then(r => r);
			}
		},
	});


	if (!event) return <EventDetailSkeleton />;

	const handleSubmitEdit = async (data: EditEventInput) => {
		if (!data.id) return;
		setMutationError(null);
		try {
			// Проверяем, что дата есть и не null
			const localDate = data.eventDate
				? DateTime.fromISO(data.eventDate).toUTC()
				: undefined;

			await updateEvent.mutateAsync({
				...data,
				eventDate: localDate?.toISO() ?? undefined,
			});

			await router.push(PATH.EVENTS.ID(data.id));
		} catch (err: any) {
			console.error(err);
			setMutationError(err.message ?? 'Ошибка обновления события');
		}
	};


	return (
		<div className="mx-auto max-w-4xl space-y-4">
			{mutationError && (
				<Alert onClose={() => setMutationError(null)}>{mutationError}</Alert>
			)}

			<EventForm
				mode={EVENT_MODE.EDIT}
				defaultValues={{
					id: event.id,
					title: event.title,
					description: event.description ?? '',
					eventDate: event.eventDate
						? DateTime.fromJSDate(new Date(event.eventDate)).toFormat('yyyy-MM-dd\'T\'HH:mm')
						: undefined,
				}}
				onSubmit={handleSubmitEdit}
			/>
		</div>
	);
}
