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
    border-bottom: 2px solid #6b9317;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
    z-index: 10;
`;
HeaderContainer.propTypes = {
	className: PropTypes.string,
};
