import { TRPCClientErrorLike } from '@trpc/client';
import { AppRouter } from '@/server/routes';
import { TRPCErrorCode } from '@/shared/util';

export function trpcError(
	error: TRPCClientErrorLike<AppRouter>,
	map: Partial<Record<TRPCErrorCode, string>>,
	fallback: string,
): string {
	const code = error.shape?.data?.code as TRPCErrorCode | undefined;
	if (code && map[code]) {
		return map[code]!;
	}
	return fallback;
}
