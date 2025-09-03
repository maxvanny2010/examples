import prisma from "@/server/core/db";

import type {Event as PrismaEvent} from '@prisma/client';

type EventWithParticipations = PrismaEvent & {
    participations: {
        user: { id: number; name: string };
        userId: number;
    }[];
};

export const eventRepository = {
    findMany: (): Promise<EventWithParticipations[]> =>
        prisma.event.findMany({
            include: {
                participations: {
                    include: {user: {select: {id: true, name: true}}},
                },
            },
        }),

    findUnique: (id: number): Promise<EventWithParticipations | null> =>
        prisma.event.findUnique({
            where: {id},
            include: {
                participations: {
                    include: {user: {select: {id: true, name: true}}},
                },
            },
        }),

    getById: (id: number): Promise<EventWithParticipations | null> =>
        prisma.event.findUnique({
            where: {id},
            include: {participations: {include: {user: {select: {id: true, name: true}}}}},
        }),

    create: (data: {
        authorId: number;
        title: string;
        description?: string | null;
        eventDate: Date;
    }): Promise<PrismaEvent> => prisma.event.create({data}),

    update: (
        id: number,
        data: { title?: string; description?: string | null; eventDate?: Date }
    ): Promise<PrismaEvent> => prisma.event.update({where: {id}, data}),

    join: (userId: number, eventId: number) =>
        prisma.participation.create({data: {userId, eventId}}),

    leave: (userId: number, eventId: number) =>
        prisma.participation.deleteMany({where: {userId, eventId}}),
};
