import { router } from '../trpc';
import { eventRouter } from '@/server/routes/event';
import { userRouter } from '@/server/routes/user';
import { authRouter } from '@/server/routes/auth';

export const appRouter = router({
	event: eventRouter,
	user: userRouter,
	auth: authRouter,
});
export type AppRouter = typeof appRouter;