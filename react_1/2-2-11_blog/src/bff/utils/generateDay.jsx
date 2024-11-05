export const generateDate = () => {
	const startDate = new Date('2024-01-01').getTime();
	const endDate = new Date('2025-12-31').getTime();
	return new Date(Math.random() * (endDate - startDate) + startDate)
		.toISOString()
		.substring(0, 16)
		.replace('T', ' ');
};
