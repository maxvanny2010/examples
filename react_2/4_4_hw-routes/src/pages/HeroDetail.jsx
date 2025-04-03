import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TABLE_NAME, TITLE } from '../constants';
import { HeaderPage } from '../component';
import { fetchData } from '../util';
import { dtoHero } from '../dto';

export function HeroDetailContainer({ className }) {
	const navigate = useNavigate();
	const { id } = useParams();
	const [hero, setHero] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchHero = async () => {
			const data = await fetchData(TABLE_NAME.HEROES, dtoHero);
			const selectedHero = data.items.find(h => Number(h.id) === Number(id));
			setHero(selectedHero);
			setLoading(false);
		};
		fetchHero().then(r => r);
	}, [id]);

	if (loading) return <p>{TITLE.LOADING}</p>;
	if (!hero) return <p>{TITLE.HERO_NOT_FOUND}</p>;

	return (
		<>
			<div className={className}>
				<HeaderPage title={hero.name} />
				<p><strong>Created:</strong> {hero.created}</p>
				<img src={hero.image}
					 alt={hero.name}
					 width="300" />
				<p>
					<strong>Status: </strong>
					<span className={`status ${hero.status === 'Alive' ? 'green' : hero.status === 'Dead' ? 'red' : 'white'}`}>
						{hero.status}</span>
				</p>
				<p><strong>Species:</strong> {hero.species}</p>
				<p><strong>Gender:</strong> {hero.gender}</p>

				<button className="button-back"
						onClick={() => navigate(-1)}>⬅
				</button>
			</div>
		</>
	);
}

export const HeroDetail = styled(HeroDetailContainer)`
	position: relative;
	max-width: 600px;
	margin: 0 auto;
	padding: 50px;
	text-align: center;
	height: 100%;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
	text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

	img {
		background-color: lightgray;
		color: #1e1e1e;
		font-weight: normal;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
		text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		padding: 4px;
		text-align: center;
		flex: 1 1 300px;
		max-width: 300px;
		margin: 10px;
		box-sizing: border-box;
	}

	.status {
		display: inline-block;

	}

	.green {
		color: #3eb748;
		font-weight: bolder;
	}

	.red {
		color: red;
		font-weight: bolder;
	}

	.button-back {
		position: absolute;
		bottom: 10px;
		right: 10px;
		padding: 8px 12px;
		background-color: #646cff;
		cursor: pointer;

		&:hover {
			background-color: #535bf2;
		}
	}


`;
HeroDetailContainer.propTypes = {
	className: PropTypes.string,
};
