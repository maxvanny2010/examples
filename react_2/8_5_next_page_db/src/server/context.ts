import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export const createContext = async ({ req, res }: CreateNextContextOptions) => {
	const session = await getServerSession(req, res, authOptions);
	console.log(session);

	return {
		user: session?.user,
	};
};

export type Context = Awaited<ReturnType<typeof createContext>>;