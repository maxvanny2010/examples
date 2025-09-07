import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/routes';
import { createContext } from '@/server/core/context';
import type { Session } from 'next-auth';
import { Role } from '@prisma/client';

const handler = async (req: Request) => {
	const userId = req.headers.get('x-user-id');
	const role = req.headers.get('x-user-role') as Role | null;

	console.log('Route headers: 📥 ', { userId, role });

	const session: Session | null = userId
		? {
			user: {
				id: userId,
				name: '',
				email: '',
				role: role && Object.values(Role).includes(role) ? role : Role.USER,
			},
			expires: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
		}
		: null;

	const context = await createContext(session);

	return fetchRequestHandler({
		endpoint: '/api/trpc',
		req,
		router: appRouter,
		createContext: () => context,
	});
};

export { handler as GET, handler as POST };
