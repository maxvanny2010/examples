import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import mainImage from '../assets/img/morty.webp';

const MainComponent = ({ className }) => {
	useEffect(() => {
	}, []);
	return (
		<div className={className}>
			<img src={mainImage}
				 alt="Home image"
				 width="100%" />
		</div>
	);
};
const Main = styled(MainComponent)`
	padding: 50px;
	height: 100%;
	color: rgba(255, 255, 255, 0.87);

	.container {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.note-customer {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 55%;
		border-bottom: 1px dotted #ededee;
		margin-bottom: 10px;
	}

	.note {
		display: flex;
		align-items: center;
		width: 55%;
		border-bottom: 1px dotted #ededee;
		margin: 10px 0;
	}

	.label {
		display: block;
		min-width: 120px;
		font-weight: 600;
		margin-bottom: 2px;
	}

	.value {
		flex: 1;
	}

	.customer {
		border-bottom: 1px dotted #ededee;
	}
`;
export default Main;

MainComponent.propTypes = {
	className: PropTypes.string,
};
