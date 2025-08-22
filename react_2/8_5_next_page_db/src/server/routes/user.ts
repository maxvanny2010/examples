import { isAuth, procedure, router } from '@/server/trpc';
import prisma from '@/server/db';
import { CreateUserSchema, EditUserSchema, UniqueUserSchema } from '@/shared/api/';
import { ROLES, RoleType } from '@/shared/types';
import bcrypt from 'bcryptjs';
import { checkRole } from '../roles';

export const userRouter = router({
	// Получить всех пользователей (только для админа)
	findAll: procedure
		.use(isAuth)
		.query(async ({ ctx: { user } }) => {
			checkRole(user.role, [ROLES.ADMIN as RoleType]);
			return prisma.user.findMany({
				select: {
					id: true,
					name: true,
					email: true,
					role: true,
				},
			});
		}),

	// Получить одного пользователя
	findUnique: procedure
		.input(UniqueUserSchema)
		.use(isAuth)
		.query(async ({ input, ctx: { user } }) => {
			checkRole(user.role, [ROLES.ADMIN as RoleType]);
			return prisma.user.findUnique({ where: { id: input.id } });
		}),

	// Создать пользователя
	create: procedure
		.input(CreateUserSchema)
		.use(isAuth)
		.mutation(async ({ input, ctx: { user } }) => {
			checkRole(user.role, [ROLES.ADMIN as RoleType]);

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

	// Редактировать пользователя
	update: procedure
		.input(EditUserSchema)
		.use(isAuth)
		.mutation(async ({ input, ctx: { user } }) => {
			checkRole(user.role, [ROLES.ADMIN as RoleType]);

			const data: any = {
				name: input.name,
				email: input.email,
				role: input.role,
			};

			if (input.password) {
				data.password = await bcrypt.hash(input.password, 10);
			}

			return prisma.user.update({
				where: { id: input.id },
				data,
			});
		}),

	// Удалить пользователя
	delete: procedure
		.input(UniqueUserSchema)
		.use(isAuth)
		.mutation(async ({ input, ctx: { user } }) => {
			checkRole(user.role, [ROLES.ADMIN as RoleType]);
			return prisma.user.delete({ where: { id: input.id } });
		}),
});
