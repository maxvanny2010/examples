import { FieldLayout } from './FieldLayout.jsx';
import React from 'react';
import PropTypes from 'prop-types';

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

export const Field = ({
						  onCurrentPlayer,
						  onSetCurrentPlayer,
						  onSetIsGameEnd,
						  onIsGameEnd,
						  onSetDraw,
						  onIsDraw,
						  onSetScope,
						  onSetFields,
						  onFields,
					  }) => {
	const handlerOnClick = (event, index) => {
		/* if game over or draw or first game - to click reject*/
		if (onCurrentPlayer !== '' && !onIsGameEnd && !onIsDraw) {
			const { target } = event;
			/*  1. if cell contains class 'marked'*/
			/*  2. if fields contains value this click reject*/
			if (!target.classList.contains('marked') && onFields[index] === '') {
				/* change a current player*/
				onSetCurrentPlayer(onCurrentPlayer === 'X' ? 'O' : 'X');
				/*  add the marked class*/
				target.classList.add('marked');

				/* change fields */
				onSetFields(prevField => {
					const newFields = [...prevField];
					newFields[index] = onCurrentPlayer;
					/*  check count not used cells */
					if ((onFields.filter(cell => cell === '')).length < 6 && !onIsGameEnd) {
						/* check  winner pattern*/
						if (checkWin(newFields, onCurrentPlayer) && !onIsGameEnd) {
							onSetIsGameEnd(true);
							/* update the scope*/
							onSetScope(prevScope => ({
								...prevScope,
								[onCurrentPlayer]: prevScope[onCurrentPlayer] + 1,
							}));
						}
					}
					return newFields;
				});
				/*  if no cell is a draw*/
				if ((onFields.filter(cell => cell === '')).length === 1 && !onIsGameEnd) {
					onSetDraw(true);
				}
			}
		}
	};
	return (
		<FieldLayout
			fields={onFields}
			onClick={handlerOnClick} />
	);
};

Field.propTypes = {
	onCurrentPlayer: PropTypes.string,
	onIsEndGame: PropTypes.bool,
	onScope: PropTypes.object,
	onIsDraw: PropTypes.bool,
	onFields: PropTypes.array,
};
