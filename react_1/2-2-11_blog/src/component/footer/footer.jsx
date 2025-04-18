import { useEffect, useState } from 'react';
import { DATA, DATA_Q, URL_WEATHER } from '../../utils';
import { SpanGreen } from '../header/components/elements/span-green/span-green.jsx';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('Cork');
	const [temperature, setTemperature] = useState(0);
	const [weather, setWeather] = useState('sun');

	useEffect(() => {
		fetch(`${URL_WEATHER}${DATA_Q}${DATA}`)
			.then(data => data.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);
	return (
		<div className={className}>
			<div>
				<div>Blog web <SpanGreen>-</SpanGreen> developer</div>
				<div>web@developer.com</div>
			</div>
			<div>
				<div>{city}{', '}
					{new Date()
						.toLocaleString('en',
							{ day: 'numeric', month: 'long' })}
				</div>
				<div>{temperature}<SpanGreen>°</SpanGreen>С, {weather}</div>
			</div>
		</div>
	);
};
export const Footer = styled(FooterContainer)`
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    width: 1000px;
    padding: 20px 30px;
    border-radius: 4px;
    background-color: #282c34;
    border-top: 2px solid #6b9317;
    box-shadow: 0 -8px 20px rgba(0, 0, 0, 0.5);
`;
FooterContainer.propTypes = {
	className: PropTypes.string,
};
