import prisma from './db';
import type { Session } from 'next-auth';
import { DBUser, UserBase } from '@/shared/types/next-auth';

export type ContextWithDBUser = {
	user?: UserBase;
	dbUser?: DBUser;
};

export const createContext = async (session: Session | null): Promise<ContextWithDBUser> => {
	if (!session?.user?.id) return {};

	const dbUserRaw = await prisma.user.findUnique({
		where: { id: Number(session.user.id) },
	});

	if (!dbUserRaw || dbUserRaw.deleted) {
		return { user: session.user };
	}

	return {
		user: session.user,
		dbUser: {
			...dbUserRaw,
			id: dbUserRaw.id.toString(),
		},
	};
};
