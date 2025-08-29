import prisma from '@/server/db';
import bcrypt from 'bcryptjs';
import { adminProcedure, router } from '@/server/trpc';
import { CreateUserSchema, EditUserSchema, UniqueUserSchema } from '@/shared/api';
import { ROLES } from '@/shared/types';

export const userRouter = router({
	// Получение всех пользователей (только админ)
	adminOnly: adminProcedure
		.query(async () => {
			return prisma.user.findMany({
				where: { deleted: false },
				select: {
					id: true,
					name: true,
					email: true,
					role: true,
					deleted: true,
				},
			});
		}),

	// Получение одного пользователя (только админ)
	findUnique: adminProcedure
		.input(UniqueUserSchema)
		.query(async ({ input }) => {
			return prisma.user.findFirst({
				where: { id: input.id, deleted: false },
			});
		}),

	// Создание пользователя (только админ)
	create: adminProcedure
		.input(CreateUserSchema)
		.mutation(async ({ input }) => {
			const hashedPassword = await bcrypt.hash(input.password, 10);
			return prisma.user.create({
				data: {
					name: input.name,
					email: input.email,
					password: hashedPassword,
					role: input.role ?? ROLES.USER,
				},
			});
		}),

	// Редактирование пользователя (только админ)
	update: adminProcedure
		.input(EditUserSchema)
		.mutation(async ({ input }) => {
			const data: any = { name: input.name, email: input.email, role: input.role };
			if (input.password) data.password = await bcrypt.hash(input.password, 10);
			return prisma.user.update({
				where: { id: input.id },
				data,
			});
		}),

	// Удаление пользователя (soft delete, только админ)
	delete: adminProcedure
		.input(UniqueUserSchema)
		.mutation(async ({ input }) => {
			return prisma.user.update({
				where: { id: input.id },
				data: { deleted: true },
			});
		}),
});
