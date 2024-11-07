import { selectUserLogin, selectUserRole, selectUserSession } from '../../../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from '../../../button/button.jsx';
import { Icon } from '../icon/icon.jsx';
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
	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
		navigate('/');
	};
	return (
		<div className={className}>
			{roleId === ROLE.GUEST
				? (
					<LoggingRow>
						<Link to={'/login'}>
							<Button width="120px">
								Login
							</Button>
						</Link>
					</LoggingRow>
				)
				: (
					<LogoutRow>
						<UserLogin>{login}</UserLogin>
						<Icon
							size="24px"
							id="fa-sign-out"
							onClick={onLogout}
						/>
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
