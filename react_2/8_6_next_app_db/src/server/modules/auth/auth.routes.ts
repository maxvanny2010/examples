import { procedure, router } from '@/server/core/trpc';
import { CreateUserInput, CreateUserSchema } from '@/shared/api';
import { authService } from './auth.service';

export const authRoutes = router({
	register: procedure
		.input(CreateUserSchema)
		.mutation(async ({ input }: { input: CreateUserInput }) => {
			return authService.register(input);
		}),
});
