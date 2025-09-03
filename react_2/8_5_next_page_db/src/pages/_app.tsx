import '@/styles/globals.css';
import {trpc} from '@/shared/schema';
import type {AppProps} from 'next/app';
import {SessionProvider} from 'next-auth/react';
import {Layout} from '@/components';
import {LogoutProvider} from '@/shared/contexts';
import {initAdminOnce} from "@/server/core/initAdmin";

if (typeof window === 'undefined') {
    await initAdminOnce();
}

export function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
    return (
        <SessionProvider session={session}>
            <div className="min-h-screen bg-gray-100">
                <LogoutProvider>
                    <Layout eventAuthorId={pageProps.eventAuthorId}>
                        <Component {...pageProps} />
                    </Layout>
                </LogoutProvider>
            </div>
        </SessionProvider>
    );
}

export default trpc.withTRPC(App);