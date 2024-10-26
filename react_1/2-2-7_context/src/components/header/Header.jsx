import { CurrentUser } from '../user/CurrentUser.jsx';

export const Header = () => {
	return (
		<div>
			<div>Info about this app</div>
			<CurrentUser />
		</div>
	);
};
/* export const Header = ({ currentUser }) => {
	return (
		<div>
			<div>Информация в шапке приложения</div>
			<CurrentUser currentUser={currentUser} />
		</div>
	);
};
 */
