import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon } from './../../../index.jsx';
import { selectUserLogin, selectUserRole, selectUserSession } from '../../../../redux/selectors';

import { logout } from '../../../../redux/action';
import { ROLE } from '../../../../utils';
import styled from 'styled-components';

const LoggingRow = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const LogoutRow = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ManagerRow = styled.div`
    display: flex;
    justify-content: space-around;
`;
const IconNavigate = styled.div`
    margin: 0;
`;
const IconStyled = styled.div`
`;
const UserLogin = styled.div`
    margin-top: 10px;
    margin-left: 20px;
    font-size: 20px;
`;
const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);
	return (
		<div className={className}>
			{roleId === ROLE.GUEST
				? (
					<LoggingRow>
						<Button width="120px">
							<Link to={'/login'}> Login </Link>
						</Button>
					</LoggingRow>
				)
				: (
					<LogoutRow>
						<UserLogin>{login}</UserLogin>
						<IconStyled onClick={() => {
							dispatch(logout(session));
							navigate('/');
						}}>
							<Icon
								size="24px"
								id="fa-sign-out"
							/>
						</IconStyled>
					</LogoutRow>
				)
			}

			<ManagerRow>
				<IconNavigate onClick={() => navigate(-1)}>
					<Icon
						size="24px"
						id="fa-backward"
						margin="0 5px 0 0"
					/>
				</IconNavigate>
				<Link to="/post">
					<Icon size="24px"
						  id="fa-file-text-o"
						  margin="0 5px 0 0" />
				</Link>
				<Link to="/users">
					<Icon size="24px"
						  id="fa-users"
						  margin="0 5px 0 0" />
				</Link>
			</ManagerRow>
		</div>
	);
};

export const ControlPanel =
	styled(ControlPanelContainer)`
        margin: 12px 0 0 50px;
	`;

ControlPanelContainer.propTypes = {
	className: PropTypes.string,
};
