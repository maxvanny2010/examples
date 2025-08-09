import { procedure, router } from '@/server/trpc';
import prisma from '@/server/db';

export const eventRouter = router({
	findMany: procedure.query(() => {
		return prisma.event.findMany();
	}),
});
export type EventRouter = typeof eventRouter;
