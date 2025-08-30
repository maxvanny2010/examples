import prisma from './db';
import bcrypt from 'bcryptjs';
import { ROLES } from '@/shared/types';

export const ensureAdminExists = async () => {
	const existingAdmin = await prisma.user.findFirst({
		where: { role: ROLES.ADMIN, deleted: false },
	});

	if (!existingAdmin) {
		const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD!, 10);

		await prisma.user.create({
			data: {
				name: process.env.ADMIN_NAME!,
				email: process.env.ADMIN_EMAIL!,
				password: hashedPassword,
				role: ROLES.ADMIN,
			},
		});

		console.log('✅ Admin created');
	} else {
		console.log('ℹ️ Admin already exists');
	}
};
