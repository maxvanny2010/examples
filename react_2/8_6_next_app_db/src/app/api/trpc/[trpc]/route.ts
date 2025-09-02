import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/routes';
import { createContext } from '@/server/core/context';

const handler = (req: Request) => {
	return fetchRequestHandler({
		endpoint: '/api/trpc',
		req,
		router: appRouter,
		createContext,
	});
};

export { handler as GET, handler as POST };
