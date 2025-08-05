import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const main = async () => {
	const user = await db.user.create({
		data: {
			name: 'User 1',
			email: 'user2@gmail.com',
			password: '123',
			events: {
				create: {
					title: 'Boxing',
					description: 'Boxing event',
					eventDate: new Date(),
				},
			},
		},
		select: {
			id: true,
			name: true,
			events: {
				select: {
					id: true,
					eventDate: true,
				},
			},
		},
	});
	console.log(user);
};

main()
	.catch((e) => {
		console.error(e);
	})
	.finally(() => db.$disconnect());
