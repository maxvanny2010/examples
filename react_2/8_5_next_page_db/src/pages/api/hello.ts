import type { NextApiRequest, NextApiResponse } from 'next';
import prisma, { User } from '@/server/db';

export type SafeUser = Pick<User, 'id' | 'name' | 'email'>;

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
