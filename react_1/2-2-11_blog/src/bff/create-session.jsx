import { removeComment } from './session/index.jsx';
import { ROLE } from '../utils/index.jsx';

export const createSession = (roleId) => {
	const session = {
		logout() {
			Object.key(session).forEach((key) => {
				delete session[key];
			});
		},
	};

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.MODERATOR: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.READER: {
			break;
		}
		default:
	}
	return session;

};
