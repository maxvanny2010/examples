import {router} from '../core/trpc';
import {adminRouters, authRouters, eventRouters} from "@/server/modules";

export const appRouter = router({
    event: eventRouters,
    user: adminRouters,
    auth: authRouters,
});
export type AppRouter = typeof appRouter;