import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/routes';
import { ContextWithDBUser, createContext as createInnerContext } from '@/server/core/context';
import { auth } from '@/auth';

const handler = async (req: Request) => {
	const session = await auth();

	const context: ContextWithDBUser = await createInnerContext(session);

	return fetchRequestHandler({
		endpoint: '/api/trpc',
		req,
		router: appRouter,
		createContext: () => context,
	});
};

export { handler as GET, handler as POST };

