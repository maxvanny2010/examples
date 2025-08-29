import prisma from './db';
import bcrypt from 'bcryptjs';
import { ROLES } from '@/shared/types';
import { MESSAGES } from '@/shared/util';

export const ensureAdminExists = async () => {
	const existingAdmin = await prisma.user.findFirst({
		where: { role: ROLES.ADMIN, deleted: false },
	});

	if (!existingAdmin) {
		const hashedPassword = await bcrypt.hash(MESSAGES.ADMIN_NAME, 10);

		await prisma.user.create({
			data: {
				name: MESSAGES.ADMIN_NAME,
				email: MESSAGES.ADMIN_EMAIL,
				password: hashedPassword,
				role: ROLES.ADMIN,
			},
		});

		console.log(MESSAGES.ADMIN_CREATED);
	} else {
		console.log(MESSAGES.AMIN_EXIST);
	}
};
