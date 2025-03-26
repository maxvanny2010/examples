export const getNavLinkStyle = ({ isActive }) => {
	console.log('###: isActive ', isActive);
	return isActive ? { color: 'red' } : {};
};
