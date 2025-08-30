import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '@/server/routes';
import { createContext } from '@/server/core/context';

const handler = trpcNext.createNextApiHandler({
	router: appRouter,
	createContext,
});

export { handler as GET, handler as POST };
