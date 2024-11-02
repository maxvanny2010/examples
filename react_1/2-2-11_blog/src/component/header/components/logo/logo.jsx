import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon, SpanGreen } from '../../../index.jsx';
import styled from 'styled-components';


const LargeText = styled.div`
    font-size: 48px;
    font-weight: 600;
    line-height: 48px;
    margin-top: 17px;
`;
const SmallText = styled.div`
    font-size: 18px;
    font-weight: bold;
`;


const LogoContainer = ({ className }) => (
	<div className={className}>
		<Link to={'/'}>
			<Icon size="48px"
				  id="fa-forumbee"
				  margin="25px 20px 0 0"
				  color="#8DCC0A"
			/>
		</Link>
		<div>
			<LargeText>Blogs</LargeText>
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
        margin-top: 2px;
	`;
LogoContainer.propTypes = {
	className: PropTypes.string,
};

