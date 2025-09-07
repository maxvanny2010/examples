import { adminProcedure, procedure, protectedProcedure, router } from '@/server/core/trpc';
import {
	CreateEventInput,
	CreateEventSchema,
	EditEventInput,
	EditEventSchema,
	JoinEventInput,
	JoinEventSchema,
	UniqueEventInput,
	UniqueEventSchema,
} from '@/shared/schema';
import { eventService } from './event.service';
import { ContextWithDBUser } from '@/server/core/context';

export const eventRouter = router({
	findMany: procedure.query(({ ctx }) => eventService.findMany(ctx)),

	findUnique: procedure
		.input(UniqueEventSchema)
		.query(({ input }: { input: UniqueEventInput }) =>
			eventService.findUnique(input)),

	getById: protectedProcedure
		.input(UniqueEventSchema)
		.query(({ input, ctx }: { input: UniqueEventInput; ctx: ContextWithDBUser }) =>
			eventService.getById(ctx, input),
		),

	create: protectedProcedure
		.input(CreateEventSchema)
		.mutation(({ input, ctx }: { input: CreateEventInput; ctx: ContextWithDBUser }) =>
			eventService.create(ctx, input),
		),

	update: protectedProcedure
		.input(EditEventSchema)
		.mutation(({ input, ctx }: { input: EditEventInput; ctx: ContextWithDBUser }) =>
			eventService.update(ctx, input),
		),

	delete: adminProcedure
		.input(UniqueEventSchema)
		.mutation(({ input, ctx }: { input: UniqueEventInput; ctx: ContextWithDBUser }) =>
			eventService.delete(ctx, input),
		),

	join: protectedProcedure
		.input(JoinEventSchema)
		.mutation(({ input, ctx }: { input: JoinEventInput; ctx: ContextWithDBUser }) =>
			eventService.join(ctx, input),
		),

	leave: protectedProcedure
		.input(JoinEventSchema)
		.mutation(({ input, ctx }: { input: JoinEventInput; ctx: ContextWithDBUser }) =>
			eventService.leave(ctx, input),
		),
});
