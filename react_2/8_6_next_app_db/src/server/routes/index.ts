import { router } from '../core/trpc';
import { eventRouter } from '@/server/modules/event/event.router';
import { userRouter } from '@/server/modules/user/user.routers';
import { authRoutes } from '@/server/modules/auth/auth.routes';

export const appRouter = router({
	event: eventRouter,
	user: userRouter,
	auth: authRoutes,
});
export type AppRouter = typeof appRouter;