import { isSuccessResponse, Response } from './response';

export function handleResponse<T>(
	result: Response<T>,
	onSuccess: (data: T) => void,
	onError?: (error?: string) => void,
) {
	if (isSuccessResponse(result)) {
		onSuccess(result.data);
	} else {
		if (onError) {
			onError(result.error);
		} else {
			console.error(result.error);
		}
	}
}
