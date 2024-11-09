export const getLastPageLinks = (links) => {
	const parts = links.split(',');
	const lastLink = parts.find(part => part.includes('rel="last"'));
	if (!lastLink) return 1;
	const url = new URL(lastLink.match(/<(.*)>/)[1]);
	return Number(url.searchParams.get('_page'));
};
