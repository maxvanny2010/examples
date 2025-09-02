import '@/shared/styles/globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { MESSAGES } from '@/shared/util';
import { ClientProviders } from '@/app/providers-wrapper';
import { initAdminOnce } from '@/server/core/initAdmin';
import { Layout } from '@/shared/ui';


export const metadata: Metadata = {
	title: MESSAGES.META,
	description: MESSAGES.META,
};

export default async function RootLayout({ children }: { children: ReactNode }) {
	if (typeof window === 'undefined') {
		await initAdminOnce();
	}

	return (
		<html lang="en">
		<body className="min-h-screen bg-gray-100">
		<ClientProviders>
			<Layout>{children}</Layout>
		</ClientProviders>
		</body>
		</html>
	);
}