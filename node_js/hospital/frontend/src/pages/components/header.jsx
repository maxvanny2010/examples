import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PAGE } from '../../constants';
import { getUserEmail, isAuthenticated } from '../../redux/selectors';
import { removeTokenFromLocalStorage } from '../util/remove-token-local-storage.jsx';
import { loginUser, logoutUserAsync } from '../../redux/actions';
import { LinkExtended } from '../../components';
import { updateTokenEmailIfUpdatePage } from '../util/get-token-email-if-update-pages.jsx';

const HeaderComponent = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const authenticated = useSelector(isAuthenticated);
	const email = useSelector(getUserEmail);
	console.log('Authenticated:', authenticated);
	console.log('Email:', email);
	const handleLogout = async () => {
		const result = await dispatch(logoutUserAsync());
		if (result.res) {
			removeTokenFromLocalStorage();
			navigate(`${PAGE.HOME}`);
		}
	};
	useEffect(() => {
		const { token, email } = updateTokenEmailIfUpdatePage();
		if (token && email) dispatch(loginUser(email));
	}, [dispatch]);
	return (
		<div className={className}>
			<div className="header">
				<div className="links">
					<ul>
						<li className="li-item">
							<LinkExtended to={'/'}>Home</LinkExtended>
						</li>
						{!authenticated && (
							<>
								<li className="li-item">
									<LinkExtended to={'/record'}>Record</LinkExtended>
								</li>
								<li className="li-item">
									<LinkExtended to={'/login'}>Login</LinkExtended>
								</li>
							</>
						)}
						{authenticated && (
							<li className="li-item">
								<LinkExtended to={'/records'}>Records</LinkExtended>
							</li>
						)}
					</ul>
				</div>
				<div className="logout">
					{
						authenticated && (
							<>
								<span className="username">{email}</span>
								<button onClick={handleLogout}
										className="btn-link"
								>
									Logout
								</button>
							</>
						)
					}
				</div>
			</div>

		</div>
	);
};
export const Header = styled(HeaderComponent)`

	.header {
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
		height: 40px;
		position: fixed;
		top: 0;
		color: #b1b2ac;
		padding: 10px 20px;
		background-color: #282c34;
		box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
		z-index: 10;
		align-items: center;
	}

	ul {
		display: flex;
		margin: 0;
		padding: 0;
	}

	.li-item {
		list-style: none;
		margin-right: 20px;
	}

	.li-item:last-child {
		margin-right: 0;
	}

	.btn-link {
		padding: 5px 10px;
	}

	.username {
		margin: 8px;
		color: #747bff;
	}

	.links {

	}

	.logout {

	}

`;

HeaderComponent.propTypes = {
	className: PropTypes.string,
};
