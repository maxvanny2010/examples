import { DateTime } from 'luxon';
import { eventRepository } from './event.repository';
import { TRPCError } from '@trpc/server';
import { CODE, MESSAGES } from '@/shared/util';
import { ContextWithDBUser } from '@/server/core/context';
import { CreateEventInput, EditEventInput, JoinEventInput, UniqueEventInput } from '@/shared/api';

export const eventService = {
	findMany: async (ctx: ContextWithDBUser) => {
		const events = await eventRepository.findMany();
		return events.map(({ participations, ...event }) => ({
			...event,
			isJoined: ctx.user ? participations.some(p => p.userId === ctx.user!.id) : false,
		}));
	},

	findUnique: async (input: UniqueEventInput) => {
		return eventRepository.findUnique(input.id);
	},

	getById: async (ctx: ContextWithDBUser, input: UniqueEventInput) => {
		const event = await eventRepository.getById(input.id);
		if (!event) {
			throw new TRPCError({ code: CODE.NOT_FOUND, message: MESSAGES.EVENT_NOT_FOUND });
		}
		const isJoined = event.participations.some(p => p.userId === ctx.dbUser!.id);
		return { ...event, isJoined };
	},

	create: async (ctx: ContextWithDBUser, input: CreateEventInput) => {
		const eventDate = input.eventDate
			? DateTime.fromISO(input.eventDate, { zone: 'local' }).toUTC().toJSDate()
			: new Date();

		return eventRepository.create({
			authorId: ctx.dbUser!.id,
			title: input.title,
			description: input.description ?? null,
			eventDate,
		});
	},

	update: async (ctx: ContextWithDBUser, input: EditEventInput) => {
		if (!input.id) {
			throw new TRPCError({ code: CODE.BAD_REQUEST, message: MESSAGES.EVENT_NO_ID });
		}

		const eventDate = input.eventDate
			? DateTime.fromISO(input.eventDate, { zone: 'local' }).toUTC().toJSDate()
			: undefined;

		return eventRepository.update(input.id, {
			title: input.title,
			description: input.description ?? null,
			...(eventDate && { eventDate }), // ...(eventDate ? { eventDate } : {}),
		});
	},

	join: async (ctx: ContextWithDBUser, input: JoinEventInput) => {
		return eventRepository.join(ctx.dbUser!.id, input.id);
	},

	leave: async (ctx: ContextWithDBUser, input: JoinEventInput) => {
		return eventRepository.leave(ctx.dbUser!.id, input.id);
	},
};
