import type {CreateNextContextOptions} from '@trpc/server/adapters/next';
import type {Session} from 'next-auth';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/pages/api/auth/[...nextauth]';
import prisma from '@/server/core/db';

// Тип пользователя из базы данных
export type DBUser = Session['user'] & {
    name: string;
    email: string;
    deleted: boolean;
};

// Контекст для tRPC
export type ContextWithDBUser = {
    user?: Session['user'];
    dbUser?: DBUser;
};

export const createContext = async ({req, res}: CreateNextContextOptions): Promise<ContextWithDBUser> => {
    const session = await getServerSession(req, res, authOptions);

    if (!session?.user) return {};

    const dbUser = await prisma.user.findUnique({
        where: {id: session.user.id},
    });

    if (!dbUser || dbUser.deleted) return {user: session.user};

    return {user: session.user, dbUser};
};
