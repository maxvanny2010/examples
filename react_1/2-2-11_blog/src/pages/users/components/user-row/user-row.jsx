import PropTypes from 'prop-types';
import { Icon } from '../../../../component';

import styled from 'styled-components';
import { TableRow } from '../table-row/table-row.jsx';
import { StyleSelect } from '../select/style-select.jsx';
import { useState } from 'react';
import { useServerRequest } from '../../../../hooks';

export const UserRowContainer = ({
									 className,
									 id,
									 login,
									 registeredAt,
									 roleId: userRoleId,
									 roles,
									 onUserRemove,
								 }) => {
	const serverRequest = useServerRequest();
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);
	const onRoleChanged = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};
	const onRoleSave = (userId, newRoleId) => {
		serverRequest('updateRole', userId, newRoleId)
			.then(() => setInitialRoleId(newRoleId));
	};
	const isNewSelectedRoleId = selectedRoleId === initialRoleId;
	return (
		<div className={className}>
			<TableRow border={true}>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<div className="role-column">
					<StyleSelect value={selectedRoleId}
								 onChange={onRoleChanged}>
						{
							roles.map(({ id, name: roleName }) => (
								<option key={Number(id)}
										value={Number(id)}>{roleName}</option>
							))
						}
					</StyleSelect>
				</div>
				<Icon
					size="24px"
					id="fa-floppy-o"
					padding="0"
					disabled={isNewSelectedRoleId}
					onClick={() => onRoleSave(id, selectedRoleId)}
				/>
			</TableRow>
			<Icon
				size="24px"
				id="fa-trash-o"
				onClick={onUserRemove}
			/>
		</div>
	);
};
export const UserRow =
	styled(UserRowContainer)`
		display: flex;
		margin-top: 10px;
	`;


UserRowContainer.propTypes = {
	className: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	login: PropTypes.string.isRequired,
	registeredAt: PropTypes.string,
	roleId: PropTypes.number.isRequired,
	roles: PropTypes.arrayOf(PropTypes.shape({})),
	onUserRemove: PropTypes.func.isRequired,
};
