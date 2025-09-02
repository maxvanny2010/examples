'use client';

import { ReactNode, useState } from 'react';
import { trpc } from './api';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
import { baseUrl } from '@/shared/util';

export function TRPCProvider({ children }: { children: ReactNode }) {
	const [queryClient] = useState(() => new QueryClient());
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					transformer: superjson,
					url: typeof window === 'undefined' ? `${baseUrl()}/api/trpc` : '/api/trpc',
					headers() {
						if (typeof window === 'undefined') {
							return { /* прокинуть cookie если надо */ };
						}
						return {};
					},
				}),
			],
		}),
	);

	return (
		<trpc.Provider client={trpcClient}
					   queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</trpc.Provider>
	);
}
