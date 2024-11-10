import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { selectUserRole } from '../../redux/selectors';
import { Forumbee, PrivateContent } from '../../component';
import { TableRow, UserRow } from './components';
import { useServerRequest } from '../../hooks';
import { checkAccess } from '../../redux/utils';
import { ROLE } from '../../utils/';

export const UsersContainer = ({ className }) => {
	const requestServer = useServerRequest();
	const userRole = useSelector(selectUserRole);
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [shouldUpdateUsers, setShouldUpdateUsers] = useState(false);
	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) return;
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

	}, [requestServer, shouldUpdateUsers, userRole]);

	const onUserRemove = (userId) => {
		if (!checkAccess([ROLE.ADMIN], userRole)) return;
		requestServer('removeUser', userId)
			.then(() => setShouldUpdateUsers(!shouldUpdateUsers));
	};
	return (
		<PrivateContent access={[ROLE.ADMIN]}
						errorServer={errorMessage}>
			<div className={className}>
				<Forumbee size="24px"
						  id={'forumbee'} />
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
		</PrivateContent>
	);
};
export const Users =
	styled(UsersContainer)`
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 570px;
	`;
UsersContainer.propTypes = {
	className: PropTypes.string,
};
