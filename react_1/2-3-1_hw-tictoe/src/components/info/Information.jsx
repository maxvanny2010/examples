import { InformationLayout } from './InformationLayout.jsx';
import style from './InformationLayot.module.css';
import PropTypes from 'prop-types';

const startNewGame = `START NEW GAME - PRESS BUTTON \'START\'`;
const draw = 'Draw!';

export const Information = ({ onScope, onIsDraw, onIsEndGame, onCurrentPlayer }) => {
	const firstStart = onCurrentPlayer === '';

	const styles = style.header + ' ' + (!onIsEndGame ? style.gameOver : style.nextMove);
	const stylesFirstStart = style.header + ' ' + style.firstStartHeader;
	const score = `Score: ${onScope.X} : ${onScope.O} `;
	const winner = `Winner: ${onCurrentPlayer === 'X' ? 'O' : 'X'}`;
	const isDraw = onIsDraw;
	const isWinner = onIsEndGame;
	const InfoString = `Next move player: ${onCurrentPlayer}`;
	return (
		<InformationLayout styles={firstStart ? stylesFirstStart : styles}>
			<div>{isDraw || isWinner ? score : ''}</div>
			<div>{isDraw ? draw : ''}</div>
			<div>{isWinner ? winner : ''}</div>
			<div>{firstStart ? startNewGame : (isDraw || isWinner) ? '' : InfoString}</div>
		</InformationLayout>
	);
};
Information.propTypes = {
	onScope: PropTypes.object,
	onIsDraw: PropTypes.bool,
	onIsEndGame: PropTypes.bool,
	onCurrentPlayer: PropTypes.string,
};
