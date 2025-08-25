import prisma from '@/server/db';
import { DateTime } from 'luxon';
import { ContextWithDBUser } from '@/server/context';
import { procedure, protectedProcedure, router } from '@/server/trpc';
import {
	CreateEventInput,
	CreateEventSchema,
	EditEventInput,
	EditEventSchema,
	JoinEventInput,
	JoinEventSchema,
	UniqueEventInput,
	UniqueEventSchema,
} from '@/shared/api';
import { TRPCError } from '@trpc/server';
import { CODE, MESSAGES } from '@/util';

export const eventRouter = router({
	// Получить все события (доступно всем)
	findMany: procedure.query(async ({ ctx }) => {
		const events = await prisma.event.findMany({
			include: {
				participations: { include: { user: { select: { id: true, name: true } } } },
			},
		});

		return events.map(({ participations, ...event }) => ({
			...event,
			isJoined: ctx.user ? participations.some(p => p.userId === ctx.user!.id) : false,
		}));
	}),

	// Получить одно событие по id (доступно всем)
	findUnique: procedure
		.input(UniqueEventSchema)
		.query(async ({ input }) => {
			return prisma.event.findUnique({
				where: { id: input.id },
				include: {
					participations: { include: { user: { select: { id: true, name: true } } } },
				},
			});
		}),
	getById: protectedProcedure
		.input(UniqueEventSchema)
		.query(async ({ input, ctx }: { input: UniqueEventInput; ctx: ContextWithDBUser }) => {
			const event = await prisma.event.findUnique({
				where: { id: input.id },
				include: { participations: true },
			});

			if (!event) {
				throw new TRPCError({ code: CODE.NOT_FOUND, message: MESSAGES.EVENT_NOT_FOUND });
			}

			const isJoined = event.participations.some(p => p.userId === ctx.dbUser.id);

			return { ...event, isJoined };
		}),

	// Создать событие (только авторизованный и активный пользователь)
	create: protectedProcedure
		.input(CreateEventSchema)
		.mutation(async ({ input, ctx }: { ctx: ContextWithDBUser; input: CreateEventInput }) => {
			const eventDate = input.eventDate
				? DateTime.fromISO(input.eventDate, { zone: 'local' }).toUTC().toJSDate()
				: new Date();

			return prisma.event.create({
				data: {
					authorId: ctx.dbUser.id,
					eventDate,
					title: input.title,
					description: input.description ?? null,
				},
			});
		}),

	// Редактировать событие (только авторизованный и активный пользователь)
	update: protectedProcedure
		.input(EditEventSchema)
		.mutation(async ({ input, ctx }: { ctx: ContextWithDBUser; input: EditEventInput }) => {
			if (!input.id) throw new TRPCError({ code: CODE.BAD_REQUEST, message: MESSAGES.EVENT_NO_ID });

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

	// Присоединиться к событию
	join: protectedProcedure
		.input(JoinEventSchema)
		.mutation(async ({ input, ctx }: { ctx: ContextWithDBUser; input: JoinEventInput }) =>
			prisma.participation.create({
				data: { userId: ctx.dbUser.id, eventId: input.id },
			}),
		),

	// Покинуть событие
	leave: protectedProcedure
		.input(JoinEventSchema)
		.mutation(async ({ input, ctx }: { ctx: ContextWithDBUser; input: JoinEventInput }) =>
			prisma.participation.deleteMany({ where: { userId: ctx.dbUser.id, eventId: input.id } }),
		),
});
