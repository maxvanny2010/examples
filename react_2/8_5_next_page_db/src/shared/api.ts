import { createTRPCNext } from '@trpc/next';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@/server/routes';
import { getBaseUrl } from '@/util/getBaseUrl';

export const trpc = createTRPCNext<AppRouter>({
	config() {
		return {
			links: [
				httpBatchLink({
					url: `${getBaseUrl()}/api/trpc`,
					async headers() {
						return {
							// authorization: getAuthCookie(),
						};
					},
				}),
			],
		};
	},
	ssr: false,
});