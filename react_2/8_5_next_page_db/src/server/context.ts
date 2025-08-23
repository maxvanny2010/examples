import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { RoleType } from '@/shared/types';

export type BaseUser = {
	id: number;
	role: RoleType;
};

export type DBUser = BaseUser & {
	name: string;
	email: string;
	deleted: boolean;
};

export const createContext = async ({ req, res }: CreateNextContextOptions) => {
	const session = await getServerSession(req, res, authOptions);
	console.log('CONTEXT SESSION:', session);
	return {
		user: session?.user as BaseUser | undefined,
	};
};

export type Context = Awaited<ReturnType<typeof createContext>>;

// --- расширенный контекст после requireActiveUser ---
export type ContextWithDBUser = Context & { dbUser: DBUser };
