import { DATA, DATA_Q, URL_WEATHER } from '../../utils/index.jsx';
import { SpanGreen } from '../../component/index.jsx';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState(0);
	const [weather, setWeather] = useState('');

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
    padding: 20px 40px;
    border-radius: 4px;
    background-color: #282c34;
    border-top: 2px solid #8DCC0A;
    box-shadow: 0 -8px 20px rgba(0, 0, 0, 0.5);
`;
FooterContainer.propTypes = {
	className: PropTypes.string,
};
