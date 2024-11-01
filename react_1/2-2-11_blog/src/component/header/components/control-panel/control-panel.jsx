import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '../icon/icon.jsx';
import { Link, useNavigate } from 'react-router-dom';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const StyledLink = styled(Link)`
	width: 120px;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	text-align: center;

	background-color: #1a1a1a;

	padding: 0.6em 1.2em;
	border-radius: 6px;
	border: 1px solid transparent;
	transition: border-color 0.25s;

	&:hover {
		color: lightgray;
		border: 1px solid #8DCC0A;
	}

	&:active {
		color: #8DCC0A;
		border-color: #8DCC0A;
		transform: scale(0.95);
	}
`;
const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<RightAligned>
				<StyledLink to={'/login'}>Login</StyledLink>
			</RightAligned>
			<RightAligned>
				<div onClick={() => navigate(-1)}>
					<Icon
						size="24px"
						id="fa-backward"
						margin="5px 5px 0 0"
					/>
				</div>
				<Link to="/post">
					<Icon size="24px"
						  id="fa-file-text-o"
						  margin="5px 5px 0 0" />
				</Link>
				<Link to="/users">
					<Icon size="24px"
						  id="fa-users"
						  margin="5px 5px 0 0" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel =
	styled(ControlPanelContainer)``;

ControlPanelContainer.propTypes = {
	className: PropTypes.string,
};
