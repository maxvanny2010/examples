export const baseUrl = () => {
	if (typeof window !== 'undefined') {
		return ''; // относительный путь в браузере
	}
	return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
};