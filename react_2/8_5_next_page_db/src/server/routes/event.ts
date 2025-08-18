import { isAuth, procedure, router } from '@/server/trpc';
import prisma from '@/server/db';
import { CreateEventSchema, JoinEventSchema, UniqueEventSchema } from '@/shared/api';

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
			return prisma.event.create({
				data: {
					authorId: user.id,
					...input,
				},
			});
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
});