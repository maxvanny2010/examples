import prisma from '@/server/core/db';
import { CreateUserInput } from '@/shared/api';

export const userRepository = {
	findAll: () =>
		prisma.user.findMany({
			where: { deleted: false },
			select: { id: true, name: true, email: true, role: true, deleted: true },
		}),

	findById: (id: number) =>
		prisma.user.findFirst({ where: { id, deleted: false } }),

	createUser: (data: CreateUserInput & { role: string }) =>
		prisma.user.create({ data }),

	updateUser: (id: number, data: Partial<CreateUserInput & { role: string }>) =>
		prisma.user.update({ where: { id }, data }),

	softDelete: (id: number) =>
		prisma.user.update({ where: { id }, data: { deleted: true } }),
};
