import {procedure, router} from '@/server/core/trpc';
import {CreateUserInput, CreateUserSchema} from '@/shared/schema';
import {authService} from './auth.service';

export const authRouters = router({
    register: procedure
        .input(CreateUserSchema)
        .mutation(async ({input}: { input: CreateUserInput }) => {
            console.log('authService.register called', input.email);
            return authService.register(input);
        }),
});
