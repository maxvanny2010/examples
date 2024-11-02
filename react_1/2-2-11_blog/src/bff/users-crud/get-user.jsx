import { getUsers } from '../index.jsx';

export const getUser = async (loginToFind) => {
	const users = await getUsers();
	return users.find(({ login }) => login === loginToFind);
};

