import prisma from '@/server/core/db';

export const eventRepository = {
	findMany: () =>
		prisma.event.findMany({
			include: {
				participations: {
					include: { user: { select: { id: true, name: true } } },
				},
			},
		}),

	findUnique: (id: number) =>
		prisma.event.findUnique({
			where: { id },
			include: {
				participations: {
					include: { user: { select: { id: true, name: true } } },
				},
			},
		}),

	getById: (id: number) =>
		prisma.event.findUnique({
			where: { id },
			include: { participations: true },
		}),

	create: (data: { authorId: number; title: string; description?: string | null; eventDate: Date }) =>
		prisma.event.create({ data }),

	update: (id: number, data: { title?: string; description?: string | null; eventDate?: Date }) =>
		prisma.event.update({ where: { id }, data }),

	join: (userId: number, eventId: number) =>
		prisma.participation.create({ data: { userId, eventId } }),

	leave: (userId: number, eventId: number) =>
		prisma.participation.deleteMany({ where: { userId, eventId } }),
};
