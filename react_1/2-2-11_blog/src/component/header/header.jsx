import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Logo } from './components/logo/logo.jsx';
import { SpanGreen } from './components/elements/span-green/span-green.jsx';
import { ControlPanel } from './components/control-panel/control-panel.jsx';

const Description = styled.div`
	font-style: italic;
`;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Description>
			Web technology<br />Writing
			<SpanGreen>code</SpanGreen>
			<br />Feedback mistakes
		</Description>
		<ControlPanel />
	</header>
);
export const Header = styled(HeaderContainer)`
	height: 120px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 1000px;
	padding: 10px 20px;
	border-radius: 4px;
	background-color: #282c34;
	box-shadow: 0 0 4px 1px #8DCC0A;
`;
HeaderContainer.propTypes = {
	className: PropTypes.string,
};
