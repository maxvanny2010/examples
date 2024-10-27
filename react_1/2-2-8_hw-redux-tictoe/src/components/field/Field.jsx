import { FieldLayout } from './FieldLayout.jsx';
import { useEffect, useState } from 'react';
import { storeFields, storeIsDraw, storeIsGameEnd, storePlayer, storeScore } from '../../Store.jsx';
import { TYPE } from '../../constants/TYPE.jsx';

const winningPattern = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function checkWin(board, player) {
	return winningPattern.some(pattern => {
		return pattern.every(index => board[index] === player);
	});
}

export const Field = () => {
	const [player, setPlayer] = useState(storePlayer.getState());
	const [isDraw, setIsDraw] = useState(storeIsDraw.getState());
	const [isGameEnd, setIsGameEnd] = useState(storeIsGameEnd.getState());
	const [fields, setFields] = useState(storeFields.getState());
	useEffect(() => {
		const unsubscribePlayer = storePlayer.subscribe(() => {
			setPlayer(storePlayer.getState());
		});
		const unsubscribeDraw = storeIsDraw.subscribe(() => {
			setIsDraw(storeIsDraw.getState());
		});
		const unsubscribeGameEnd = storeIsGameEnd.subscribe(() => {
			setIsGameEnd(storeIsGameEnd.getState());
		});
		const unsubscribeFields = storeFields.subscribe(() => {
			setFields(storeFields.getState());
		});
		return () => {
			unsubscribePlayer();
			unsubscribeDraw();
			unsubscribeGameEnd();
			unsubscribeFields();
		};
	}, []);
	const handlerOnClick = (event, index) => {
		const { target } = event;
		if (player !== '' && !isGameEnd && !isDraw) {
			if (!target.classList.contains('marked') && fields[index] === '') {
				storePlayer.dispatch({ type: TYPE.SET_PLAYER, payload: player });
				target.classList.add('marked');

				const newFields = [...fields];
				newFields[index] = player;

				if ((newFields.filter(cell => cell === '')).length < 6 && !isGameEnd) {
					if (checkWin(newFields, player) && !isGameEnd) {
						storeIsGameEnd.dispatch({ type: TYPE.GAME_END_TRUE });
						storeScore.dispatch({ type: player });
					}
				}
				storeFields.dispatch({ type: TYPE.UPDATE_FIELDS, payload: newFields });
				if ((fields.filter(cell => cell === '')).length === 1 && !isGameEnd) {
					storeIsDraw.dispatch({ type: TYPE.DRAW_TRUE });
				}

			}
		}
	};
	return (
		<FieldLayout
			onClick={handlerOnClick} />
	);
};
