import prisma from '@/server/core/db';
import type {User} from '@prisma/client';
import {CreateUserInput} from '@/shared/schema';

type SafeUser = Pick<User, 'id' | 'name' | 'email' | 'role' | 'deleted'>;
export const userRepository = {
    findAll: (): Promise<SafeUser[]> =>
        prisma.user.findMany({
            where: {deleted: false},
            select: {id: true, name: true, email: true, role: true, deleted: true},
        }),

    findById: (id: number): Promise<SafeUser | null> =>
        prisma.user.findFirst({where: {id, deleted: false}}),

    createUser: (data: CreateUserInput & { role: string }): Promise<User> =>
        prisma.user.create({data}),

    updateUser: (id: number, data: Partial<CreateUserInput & { role: string }>): Promise<User> =>
        prisma.user.update({where: {id}, data}),

    softDelete: (id: number): Promise<User> =>
        prisma.user.update({where: {id}, data: {deleted: true}}),
};
