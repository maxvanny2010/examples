import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectUserSession } from '../redux/selectors';
import { server } from '../bff';

export const useServerRequest = () => {
	const session = useSelector(selectUserSession);
	return useCallback((operation, ...params) => {
		return server[operation](
			['register', 'authorize', 'fetchPost', 'fetchPosts'].includes(operation)
				? params
				: [session, ...params],
		);
	}, [session]);
};
