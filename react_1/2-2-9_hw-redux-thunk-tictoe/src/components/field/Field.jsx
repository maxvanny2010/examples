import { FieldLayout } from './FieldLayout.jsx';
import React from 'react';
import { TYPE } from '../../constants/TYPE.jsx';
import { useDispatch, useSelector } from 'react-redux';

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
	const dispatch = useDispatch();
	const player = useSelector(state => state.statePlayer);
	const isDraw = useSelector(state => state.stateDraw);
	const isGameEnd = useSelector(state => state.stateGameEnd);
	const fields = useSelector(state => state.stateFields);

	const handlerOnClick = (event, index) => {
		const { target } = event;
		if (player !== '' && !isGameEnd && !isDraw) {
			if (fields[index] === '') {
				target.classList.add('marked');
				const newFields = [...fields];

				newFields[index] = player;
				if ((newFields.filter(cell => cell === '')).length < 6 && !isGameEnd) {

					if (checkWin(newFields, player) && !isGameEnd) {
						dispatch({ type: TYPE.GAME_END_TRUE });
						dispatch({ type: player });
					}
				}
				if ((newFields.filter(cell => cell === '')).length === 0 && !isGameEnd) {
					dispatch({ type: TYPE.DRAW_TRUE });
				}
				dispatch({ type: TYPE.SET_PLAYER, payload: player });
				dispatch({ type: TYPE.UPDATE_FIELDS, payload: newFields });
			}
		}
	};
	return (
		<FieldLayout
			onClick={handlerOnClick} />
	);
};
