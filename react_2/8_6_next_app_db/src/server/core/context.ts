import prisma from './db';
import type { Session } from 'next-auth';
import type { DBUser as DBUserOriginal } from '@/shared/types/next-auth';
import type { Role } from '@prisma/client';

export type DBUser = Omit<DBUserOriginal, 'id' | 'role'> & {
	id: string;
	role: Role;
};

export type ContextWithDBUser = {
	user?: Session['user'];
	dbUser?: DBUser;
};

export const createContext = async (session: Session | null): Promise<ContextWithDBUser> => {
	if (!session?.user?.id) return {};

	const dbUserRaw = await prisma.user.findUnique({
		where: { id: Number(session.user.id) },
	});

	if (!dbUserRaw || dbUserRaw.deleted) return { user: session.user };

	return {
		user: session.user,
		dbUser: { ...dbUserRaw, id: dbUserRaw.id.toString() },
	};
};
