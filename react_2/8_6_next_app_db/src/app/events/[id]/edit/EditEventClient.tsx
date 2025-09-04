'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EditEventInput } from '@/shared/schema';
import { trpc } from '@/shared/api';
import { EventForm } from '@/features/event-form';
import { SkeletonEventDetail } from '@/entities/event/skeletons';
import { EVENT_MODE } from '@/shared/types';
import { Alert } from '@/shared/ui';
import { DateTime } from 'luxon';
import { PATH } from '@/shared/path';
import { MESSAGES } from '@/shared/util';

interface EditEventClientProps {
	id: number;
}

export const EditEventClient = ({ id }: EditEventClientProps) => {
	const router = useRouter();
	const utils = trpc.useUtils();
	const [mutationError, setMutationError] = useState<string | null>(null);

	const { data: event, isLoading } = trpc.event.getById.useQuery({ id }, { enabled: !!id });

	const updateEvent = trpc.event.update.useMutation({
		onMutate: async (newData: EditEventInput) => {
			if (!newData.id) return;
			const idx = newData.id;
			await utils.event.getById.cancel({ id: idx });
			await utils.event.findMany.cancel();

			const previousEvent = utils.event.getById.getData({ id: idx });
			const previousList = utils.event.findMany.getData();

			const newEventDate = newData.eventDate ? new Date(newData.eventDate) : undefined;

			utils.event.getById.setData({ id: idx }, (old) =>
				old ? { ...old, ...newData, eventDate: newEventDate ?? old.eventDate } : old,
			);

			if (previousList) {
				utils.event.findMany.setData(undefined, (oldList) =>
					oldList?.map((ev) =>
						ev.id === idx ? { ...ev, ...newData, eventDate: newEventDate ?? ev.eventDate } : ev,
					) ?? oldList,
				);
			}

			return { previousEvent, previousList };
		},
		onError: (err, newData, context) => {
			if (!newData?.id) return;
			const idx = newData.id;
			if (context?.previousEvent) utils.event.getById.setData({ id: idx }, context.previousEvent);
			if (context?.previousList) utils.event.findMany.setData(undefined, context.previousList);
			setMutationError(err.message);
		},
		onSettled: (_data, _error, variables) => {
			if (variables?.id) {
				utils.event.getById.invalidate({ id: variables.id }).then(() => {
				});
				utils.event.findMany.invalidate().then(() => {
				});
			}
		},
	});

	if (isLoading || !event) return <SkeletonEventDetail />;

	const handleSubmitEdit = async (data: EditEventInput) => {
		if (!data.id) return;
		setMutationError(null);

		try {
			const localDate = data.eventDate ? DateTime.fromISO(data.eventDate).toUTC() : undefined;
			await updateEvent.mutateAsync({ ...data, eventDate: localDate?.toISO() ?? undefined });
			router.push(PATH.EVENTS.ID(data.id));
		} catch (err: unknown) {
			setMutationError((err as Error).message ?? MESSAGES.EVENT_ERROR_UPDATE);
		}
	};

	return (
		<div className="mx-auto max-w-4xl space-y-4">
			{mutationError && <Alert onClose={() => setMutationError(null)}>{mutationError}</Alert>}

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
				onSubmitAction={handleSubmitEdit}
			/>
		</div>
	);
};
