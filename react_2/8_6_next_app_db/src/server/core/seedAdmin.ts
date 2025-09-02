import prisma from './db';
import bcrypt from 'bcryptjs';
import { ROLES } from '@/shared/types';

export const ensureAdminExists = async () => {
	const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD!, 10);

	await prisma.user.create({
		data: {
			name: process.env.ADMIN_NAME!,
			email: process.env.ADMIN_EMAIL!,
			password: hashedPassword,
			role: ROLES.ADMIN,
		},
	});
};

export const checkIfAdminExists = async (): Promise<boolean> => {
	const admin = await prisma.user.findFirst({
		where: { role: ROLES.ADMIN, deleted: false },
	});
	return !!admin;
};
