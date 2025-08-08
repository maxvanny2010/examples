import { createTRPCNext } from '@trpc/next';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@/server/routes';
import { ssrPrepass } from '@trpc/next/ssrPrepass';
import { getBaseUrl } from '@/util/getBaseUrl';
import superjson from 'superjson';

export const trpc = createTRPCNext<AppRouter>({
	ssr: true,
	ssrPrepass,
	transformer: superjson,
	config(opts) {
		const isBrowser = typeof window !== 'undefined';
		const { ctx } = opts;

		return {
			links: [
				httpBatchLink({
					url: isBrowser ? '/api/trpc' : `${getBaseUrl()}/api/trpc`,
					transformer: superjson,
					headers() {
						if (isBrowser) return {};
						if (!ctx?.req?.headers) return {};
						return {
							cookie: ctx.req.headers.cookie ?? '',
						};
					},

				}),
			],
		};
	},
});
