import { SpanGreen } from '../elements/span-green/span-green.jsx';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const LargeText = styled.div`
	font-family: Inter, serif;
	font-size: 48px;
	font-weight: 400;
	line-height: 48px;
	margin-top: 17px;
	letter-spacing: .2em;
`;
const SmallText = styled.div`
	font-size: 18px;
	font-weight: 700;
`;


const LogoContainer = ({ className }) => (
	<div className={className}>
		<div>
			<LargeText>BLOG</LargeText>
			<SmallText>coffeeIT
				<SpanGreen>-</SpanGreen>
				architect
			</SmallText>
		</div>
	</div>
);
export const Logo =
	styled(LogoContainer)`
		display: flex;
		margin: 2px 0 0 12px;
	`;
LogoContainer.propTypes = {
	className: PropTypes.string,
};

