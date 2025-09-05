'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { LogoutProvider } from '@/shared/contexts';
import { TRPCProvider } from '@/shared/api/trpc-provider';

export function ClientProviders({ children }: { children: ReactNode }) {
	return (
		<SessionProvider refetchInterval={0}
						 refetchOnWindowFocus={false}>
			<LogoutProvider>
				<TRPCProvider>{children}</TRPCProvider>
			</LogoutProvider>
		</SessionProvider>
	);
}