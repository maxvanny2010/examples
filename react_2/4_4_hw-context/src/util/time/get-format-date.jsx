export function getFormatDate(rowData) {
	const date = new Date(rowData);
	return date.toISOString().replace('T', ' ').slice(0, 19); // "YYYY-MM-DD HH:MM:SS"
}

