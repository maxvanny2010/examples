// server/context.ts
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import type { Session } from 'next-auth';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prisma from '@/server/db';

// --- Тип пользователя из базы данных (DBUser) ---
export type DBUser = Session['user'] & {
	name: string;
	email: string;
	deleted: boolean;
};

// --- Контекст для tRPC ---
export const createContext = async ({ req, res }: CreateNextContextOptions) => {
	const session = await getServerSession(req, res, authOptions);

	if (!session?.user) return { user: undefined };
	const dbUser = await prisma.user.findUnique({
		where: { id: session.user.id },
	});
	if (!dbUser || dbUser.deleted) {
		return { user: undefined };
	}

	return {
		user: session.user, // Session['user']
		dbUser, // DBUser
	};
};

export type Context = Awaited<ReturnType<typeof createContext>>;

// Контекст с dbUser
export type ContextWithDBUser = Context & { dbUser: DBUser };
