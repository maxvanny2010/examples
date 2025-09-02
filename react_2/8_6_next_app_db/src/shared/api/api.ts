'use client';

import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@/server/routes';

export const trpc = createTRPCReact<AppRouter>();

export type RouterInput = import('@trpc/server').inferRouterInputs<AppRouter>;
export type RouterOutput = import('@trpc/server').inferRouterOutputs<AppRouter>;
