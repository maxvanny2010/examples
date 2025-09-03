import {adminProcedure, router} from '@/server/core/trpc';
import {CreateUserSchema, EditUserSchema, UniqueUserSchema} from '@/shared/schema';
import {userService} from './user.service';

export const adminRouters = router({
    getAll: adminProcedure.query(() => userService.getAll()),

    findUnique: adminProcedure
        .input(UniqueUserSchema)
        .query(({input}) => userService.getById(input.id)),

    create: adminProcedure
        .input(CreateUserSchema)
        .mutation(({input}) => userService.create(input)),

    update: adminProcedure
        .input(EditUserSchema)
        .mutation(({input}) => userService.update(input)),

    delete: adminProcedure
        .input(UniqueUserSchema)
        .mutation(({input}) => userService.delete(input.id)),
});
