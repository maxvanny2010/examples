import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/server/db';
import { SafeUser } from '@/types/SafeUser';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<SafeUser[]>,
) {
	const users = await prisma.user.findMany({
		select: {
			id: true,
			name: true,
			email: true,
		},
	});

	res.status(200).json(users);
}
