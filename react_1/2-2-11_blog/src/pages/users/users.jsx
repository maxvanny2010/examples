import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Content, Icon } from '../../component';
import { TableRow, UserRow } from './components';
import { useServerRequest } from '../../hooks';
import { ROLE } from '../../utils/';
import { useNavigate } from 'react-router-dom';

export const UsersContainer = ({ className }) => {
	const navigate = useNavigate();
	const requestServer = useServerRequest();
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [shouldUpdateUsers, setShouldUpdateUsers] = useState(false);
	useEffect(() => {
		Promise.all(
			[requestServer('fetchUsers'),
				requestServer('fetchRoles'),
			])
			.then(([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}
				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			}).catch((error) => {
			setErrorMessage(error.message);
		});

	}, [requestServer, shouldUpdateUsers]);

	const onUserRemove = (userId) => {
		requestServer('removeUser', userId)
			.then(() => setShouldUpdateUsers(!shouldUpdateUsers));
	};
	return (
		<div className={className}>
			<Icon size="24px"
				  id="fa-forumbee"
				  margin="25px 20px 0 0"
				  color="#8DCC0A"
				  onClick={() => navigate('/')}
			/>
			<Content error={errorMessage}>
				<div>
					<TableRow>
						<div className="login-column">Login</div>
						<div className="registered-at-column">Date of registration</div>
						<div className="role-column">Role</div>
					</TableRow>
					{
						users.map(({ id, login, registeredAt, roleId }) => (
							<UserRow
								key={id}
								id={id}
								login={login}
								registeredAt={registeredAt}
								roleId={roleId}
								roles={roles.filter(({ id: roleId }) => roleId !== ROLE.GUEST)}
								onUserRemove={() => onUserRemove(id)}
							/>
						))
					}
				</div>
			</Content>
		</div>
	);
};
export const Users =
	styled(UsersContainer)`
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 570px;
		font-size: 18px;

	`;
UsersContainer.propTypes = {
	className: PropTypes.string,
};
