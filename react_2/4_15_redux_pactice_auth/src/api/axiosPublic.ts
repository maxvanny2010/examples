import axios from 'axios';

const axiosPublic = axios.create({
	baseURL: '/auth',
	withCredentials: true,
});

export default axiosPublic;
