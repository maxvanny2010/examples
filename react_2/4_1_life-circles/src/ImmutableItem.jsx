import './App.css';
import logo from './assets/logo.svg';
import { useState } from 'react';

const CARDS = [
	{
		id: '1',
		name: 'Google',
		like: false,
	}, {
		id: '1',
		name: 'Sun',
		like: false,
	}, {
		id: '1',
		name: 'Oracle',
		like: false,
	}, {
		id: '1',
		name: 'Microsoft',
		like: false,
	},
];

export function Card({ name, isLike, onClick }) {
	return (
		<div>
			<p>{name}</p>
			<button onClick={onClick}>{isLike ? 'UnLike' : 'Like'}</button>
		</div>
	);
}

export function ImmutableItem() {
	const [cards, setCars] = useState(CARDS);
	const handleLikeClick = () => {
		console.log('####: id', id);
		const cardsCopy = cards.map(item => {
			const copyItem = { ...item };
			if (item.id === id) copyItem.like = !item.like;
			return copyItem;
		});
		console.log('####: id', id);
		setCars(cardsCopy);
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo}
					 className="App-logo"
					 alt="" />
				{
					CARDS.map((item) => (
						<Card key={item.id}
							  name={item.name}
							  isLike={item.like}
							  onClick={() => handleLikeClick(item.id)}
						/>),
					)
				}
			</header>
		</div>
	);
}



