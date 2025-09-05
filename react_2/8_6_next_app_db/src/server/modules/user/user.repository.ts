import prisma from '@/server/core/db';
import { CreateUserInput } from '@/shared/schema';

export const userRepository = {
	findAll: async () => {
		const users = await prisma.user.findMany({
			where: { deleted: false },
			select: { id: true, name: true, email: true, role: true, deleted: true },
		});

		return users.map(u => ({
			...u,
			id: u.id.toString(),
		}));
	},

	findById: async (id: number) => {
		const user = await prisma.user.findFirst({ where: { id, deleted: false } });
		if (!user) return null;
		return { ...user, id: user.id.toString() };
	},


	createUser: (data: CreateUserInput & { role: string }) =>
		prisma.user.create({ data }),

	updateUser: (id: number, data: Partial<CreateUserInput & { role: string }>) =>
		prisma.user.update({ where: { id }, data }),

	softDelete: (id: number) =>
		prisma.user.update({ where: { id }, data: { deleted: true } }),
};
