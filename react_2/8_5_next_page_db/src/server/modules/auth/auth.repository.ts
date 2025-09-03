import prisma from '@/server/core/db';
import {CreateUserInput} from '@/shared/schema';

export const authRepository = {
    createUser: (data: CreateUserInput) => {
        return prisma.user.create({data});
    },
    findByEmail: (email: string) => prisma.user.findUnique({where: {email}}),
};
