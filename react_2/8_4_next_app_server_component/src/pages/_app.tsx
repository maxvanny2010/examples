import { useState } from 'react';
import { AppProps } from 'next/app';
import { Header } from '@/components/Header';
import { TopLoadingBar } from '@/components/TopLoadingBar';
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());
	return (
		<QueryClientProvider client={queryClient}>
			<HydrationBoundary state={pageProps.dehydratedState}>
				<div className="min-h-screen bg-gray-100 px-4 sm:px-6">
					<Header />
					<TopLoadingBar />
					<main className="max-w-[1440px] mx-auto">
						<Component {...pageProps} />
					</main>
				</div>
			</HydrationBoundary>
		</QueryClientProvider>
	);
}
