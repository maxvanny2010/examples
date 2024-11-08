import { SpanGreen } from '../elements/span-green/span-green.jsx';
import { Icon } from '../icon/icon.jsx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const LargeText = styled.div`
    font-size: 48px;
    font-weight: 400;
    line-height: 48px;
    margin-top: 17px;
    letter-spacing: .1em;
`;
const SmallText = styled.div`
    font-size: 18px;
    font-weight: 700;
`;


const LogoContainer = ({ className }) => (
	<div className={className}>
		<Link to={'/'}>
			<Icon size="48px"
				  id="fa-forumbee"
				  margin="25px 20px 0 0"
				  color="#6b9317"
			/>
		</Link>
		<div>
			<LargeText>BLOG</LargeText>
			<SmallText>web
				<SpanGreen>-</SpanGreen>
				developer
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

