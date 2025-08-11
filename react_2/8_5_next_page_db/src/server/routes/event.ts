import { procedure, router } from '@/server/trpc';
import prisma from '@/server/db';
import { CreateEventSchema } from '@/shared/api';

export const eventRouter = router({
	findMany: procedure.query(() => {
		return prisma.event.findMany();
	}),
	create: procedure
		.input(CreateEventSchema)
		.mutation(async ({ input }) => {
			const user = await prisma.user.findFirstOrThrow({});
			return prisma.event.create({
				data: {
					authorId: user.id,
					...input,
				},
			});
		}),
});