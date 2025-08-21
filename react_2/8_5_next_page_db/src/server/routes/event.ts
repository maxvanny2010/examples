import { isAuth, procedure, router } from '@/server/trpc';
import prisma from '@/server/db';
import { CreateEventSchema, EditEventSchema, JoinEventSchema, UniqueEventSchema } from '@/shared/api';
import { DateTime } from 'luxon';

export const eventRouter = router({
	findMany: procedure.query(async ({ ctx: { user } }) => {
		let events = await prisma.event.findMany({
			include: {
				participations: true,
			},
		});
		return events.map(({ participations, ...event }) => ({
			...event,
			isJoined: participations.some(({ userId }) => user?.id === userId),
		}));
	}),
	findUnique: procedure
		.input(UniqueEventSchema)
		.use(isAuth)
		.query(({ input }) => {
			return prisma.event.findUnique({
				where: input,
				select: {
					id: true,
					title: true,
					description: true,
					createdAt: true,
					eventDate: true,
					participations: {
						select: {
							user: {
								select: {
									id: true,
									name: true,
								},
							},
						},
					},
				},
			});
		}),
	create: procedure
		.input(CreateEventSchema)
		.use(isAuth)
		.mutation(async ({ input, ctx: { user } }) => {
			// eventDate преобразуем в Date, если есть
			const eventDate = input.eventDate
				? DateTime.fromISO(input.eventDate, { zone: 'local' }).toUTC().toJSDate()
				: new Date(); // текущую дату по умолчанию

			return prisma.event.create({
				data: {
					authorId: user.id,
					eventDate,
					title: input.title,
					description: input.description ?? null,
				},
			});
		}),

	update: procedure
		.input(EditEventSchema)
		.use(isAuth)
		.mutation(async ({ input }) => {
			if (!input.id) throw new Error('ID события не передан');

			const eventDate = input.eventDate
				? DateTime.fromISO(input.eventDate, { zone: 'local' }).toUTC().toJSDate()
				: undefined;

			return prisma.event.update({
				where: { id: input.id },
				data: {
					title: input.title,
					description: input.description ?? null,
					...(eventDate ? { eventDate } : {}),
				},
			});
		}),
	getById: procedure
		.input(UniqueEventSchema)
		.use(isAuth)
		.query(async ({ input }) => {
			console.log('getById input:', input);
			try {
				const event = await prisma.event.findUnique({ where: { id: input.id } });
				console.log('getById result:', event);
				return event;
			} catch (err) {
				console.error('getById error:', err);
				throw err;
			}
		}),
	join: procedure
		.input(JoinEventSchema)
		.use(isAuth)
		.mutation(async ({ input, ctx: { user } }) => {
			// Создаем запись об участии и сразу же включаем в ответ
			// связанные данные пользователя и события.
			return prisma.participation.create({
				data: {
					userId: user.id,
					eventId: input.id,
				},
				// ключевое изменение
				include: {
					user: {
						// Можно выбрать конкретные поля, если не нужен весь объект
						select: {
							email: true,
							id: true,
						},
					},
					event: {
						select: {
							title: true,
							id: true,
						},
					},
				},
			});
		}),
	leave: procedure
		.input(JoinEventSchema)
		.use(isAuth)
		.mutation(async ({ input, ctx: { user } }) => {
			return prisma.participation.deleteMany({
				where: {
					userId: user.id,
					eventId: input.id,
				},
			});
		}),
});