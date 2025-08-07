import { procedure, router } from '../trpc';
import { z } from 'zod';

export const appRouter = router({
	hello: procedure
		.input(z.object({ text: z.string() }))
		.query(async (opts) => {
			return { greeting: `hello ${opts.input.text}` };
		}),
});