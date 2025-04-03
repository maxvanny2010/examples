import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { LinkExtended } from './';
import { PAGE } from '../constants';

const HeaderComponent = ({ className }) => {
	useEffect(() => {
	}, []);
	return (
		<div className={className}>
			<div className="header">
				<div className="links">
					<ul>
						<li className="li-item">
							<LinkExtended to={PAGE.HOME}>Home</LinkExtended>
						</li>
						<li className="li-item">
							<LinkExtended to={PAGE.HEROES}>Heroes</LinkExtended>
						</li>
						<li className="li-item">
							<LinkExtended to={PAGE.LOCATIONS}>Locations</LinkExtended>
						</li>
						<li className="li-item">
							<LinkExtended to={PAGE.EPISODES}>Episodes</LinkExtended>
						</li>
					</ul>
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
		padding: 10px 50px;
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

`;

HeaderComponent.propTypes = {
	className: PropTypes.string,
};
