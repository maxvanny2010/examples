import {createTRPCNext} from '@trpc/next';
import {httpBatchLink} from '@trpc/client';
import type {AppRouter} from '@/server/routes';
import {ssrPrepass} from '@trpc/next/ssrPrepass';
import {baseUrl} from '@/shared/util';
import superjson from 'superjson';
import {inferRouterInputs, inferRouterOutputs} from '@trpc/server';

export * from './event.schema';
export * from './user.shema';
export * from './register.schema';
export * from './login.schema';

export type RouterInput = inferRouterInputs<AppRouter>
export type RouterOutput = inferRouterOutputs<AppRouter>

export const trpc = createTRPCNext<AppRouter>({
    ssr: true,
    ssrPrepass,
    transformer: superjson,
    config(opts) {
        const isBrowser = typeof window !== 'undefined';
        const {ctx} = opts;

        return {
            links: [
                httpBatchLink({
                    url: isBrowser ? '/api/trpc' : `${baseUrl()}/api/trpc`,
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
