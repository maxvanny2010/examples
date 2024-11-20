import { ERROR, PAGE, URL } from '../../utils';

export const newQuestion = async () => {
	try {
		const res = await fetch(`${URL}/${PAGE.NEW}`);
		if (!res.ok) {
			const error = res.status === 404
				? ERROR.PAGE_NOT_EXIT
				: ERROR.SOMETHING_HAPPENED_TRY_AGAIN_LATE;
			return Promise.reject(error);
		}
		return await res.json();
	} catch (error) {
		console.error(error);
	}
};
