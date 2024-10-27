import { InformationLayout } from './InformationLayout.jsx';
import style from './InformationLayot.module.css';
import { useEffect, useState } from 'react';
import { storeIsDraw, storeIsGameEnd, storePlayer, storeScore } from '../../Store.jsx';
import { PLAYER } from '../../constants/PLAYER.jsx';

const startNewGame = `START NEW GAME - PRESS BUTTON 'START'`;
const draw = 'Draw!';

export const Information = () => {
	const [player, setPlayer] = useState(storePlayer.getState());
	const [isDraw, setIsDraw] = useState(storeIsDraw.getState());
	const [isGameEnd, setIsGameEnd] = useState(storeIsGameEnd.getState());
	const [score, setScore] = useState(storeScore.getState());

	useEffect(() => {
		const unsubscribePlayer = storePlayer.subscribe(() =>
			setPlayer(storePlayer.getState()));
		const unsubscribeDraw = storeIsDraw.subscribe(() =>
			setIsDraw(storeIsDraw.getState()));
		const unsubscribeGameEnd = storeIsGameEnd.subscribe(() =>
			setIsGameEnd(storeIsGameEnd.getState()));
		const unsubscribeScore = storeScore.subscribe(() =>
			setScore(storeScore.getState()));

		return () => {
			unsubscribePlayer();
			unsubscribeDraw();
			unsubscribeGameEnd();
			unsubscribeScore();
		};
	}, []);
	const firstStart = player === '';

	const styles = style.header + ' ' + (!isGameEnd ? style.gameOver : style.nextMove);
	const stylesFirstStart = style.header + ' ' + style.firstStartHeader;
	const scoreGame = `Score: ${score.X} : ${score.O} `;
	const winner = `Winner: ${player === PLAYER.X ? PLAYER.O : PLAYER.X}`;
	const InfoString = `Next move player: ${player}`;
	return (
		<InformationLayout styles={firstStart ? stylesFirstStart : styles}>
			<div>{isDraw || isGameEnd ? scoreGame : ''}</div>
			<div>{isDraw ? draw : ''}</div>
			<div>{isGameEnd ? winner : ''}</div>
			<div>{firstStart ? startNewGame : (isDraw || isGameEnd) ? '' : InfoString}</div>
		</InformationLayout>
	);

};
