import axios from 'axios';
import { store } from '../store/store';
import { logout, setAccessToken } from '../store/authSlice';

const api = axios.create({
	baseURL: '/auth',
	withCredentials: true,
});

api.interceptors.request.use(config => {
	const token = store.getState().auth.accessToken;
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

api.interceptors.response.use(
	res => res,
	async err => {
		const originalRequest = err.config;

		if (
			err.response?.status === 401 &&
			!originalRequest._retry &&
			!originalRequest.url?.includes('/refresh')
		) {
			originalRequest._retry = true;
			try {
				const res = await api.post('/refresh', {}, { withCredentials: true });
				store.dispatch(setAccessToken(res.data.accessToken));
				originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
				return api(originalRequest);
			} catch (e) {
				store.dispatch(logout());
			}
		}

		return Promise.reject(err);
	},
);


export default api;
