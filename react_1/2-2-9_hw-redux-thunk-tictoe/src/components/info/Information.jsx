import { InformationLayout } from './InformationLayout.jsx';
import style from './InformationLayot.module.css';
import { PLAYER } from '../../constants/PLAYER.jsx';
import { useSelector } from 'react-redux';

const startNewGame = `START NEW GAME - PRESS BUTTON \'START\'`;
const draw = 'Draw!';

export const Information = () => {
	const player = useSelector(state => state.statePlayer);
	const isDraw = useSelector(state => state.stateDraw);
	const isGameEnd = useSelector(state => state.stateGameEnd);
	const score = useSelector(state => state.stateScore);
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
