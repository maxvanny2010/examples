import prisma from './db';
import type { Session } from 'next-auth';
import { getServerSession } from 'next-auth';
import { DBUser } from '@/shared/types/user';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export type ContextWithDBUser = {
	user?: Session['user'];
	dbUser?: DBUser;
};

export const createContext = async (): Promise<ContextWithDBUser> => {
	const session = await getServerSession(authOptions);

	if (!session?.user?.id) return {};

	const dbUser = await prisma.user.findUnique({
		where: { id: session.user.id },
	});

	if (!dbUser || dbUser.deleted) return { user: session.user };

	return { user: session.user, dbUser };
};

export type TRPCContext = Awaited<ReturnType<typeof createContext>>;
