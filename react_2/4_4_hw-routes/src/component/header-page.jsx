import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.div`
	margin: 0 auto;
	align-items: center;
	font-size: 24px;
	font-weight: bolder;
	text-transform: uppercase;
	display: flex;
	justify-content: center;
	height: 100%;
	min-height: 50px;
	text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5),
		-1px -1px 0 rgba(255, 255, 255, 0.6);
`;


export function HeaderPage({ title }) {
	return (
		<Header>{title}</Header>
	);
}

HeaderPage.propTypes = {
	title: PropTypes.string,
};
