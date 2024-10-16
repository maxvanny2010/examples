import styles from './Game.module.css';
import { Information } from '../info/Information.jsx';
import { Field } from '../field/Field.jsx';
import { useState } from 'react';
import { GameLayout } from './GameLayout.jsx';


const fieldsInit = ['', '', '', '', '', '', '', '', ''];

export const Game = () => {
	const [fields, setFields] = useState(fieldsInit);
	const [currentPlayer, setCurrentPlayer] = useState('');
	const [isGameEnd, setIsGameEnd] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [scope, setScope] = useState({ X: 0, O: 0 });
	const handleOnClickForStartNewGame = () => {
		setIsDraw(false);
		setIsGameEnd(false);
		setFields(['', '', '', '', '', '', '', '', '']);
		setCurrentPlayer(Math.random() < 0.5 ? 'X' : 'O');
	};
	/*
	 // if i didn't comment strict mode i would have seen a double render in these logs
	 console.log({...scope});
	 console.log({currentPlayer});
	*/
	return (
		<div className={styles.block}>
			<Information
				onScope={scope}
				onIsDraw={isDraw}
				onIsEndGame={isGameEnd}
				onCurrentPlayer={currentPlayer}
			/>
			<Field
				onCurrentPlayer={currentPlayer}
				onSetCurrentPlayer={setCurrentPlayer}
				onSetIsGameEnd={setIsGameEnd}
				onIsGameEnd={isGameEnd}
				onSetDraw={setIsDraw}
				onIsDraw={isDraw}
				onSetScope={setScope}
				onSetFields={setFields}
				onFields={fields}
			/>
			<GameLayout
				onIsGameEnd={isGameEnd}
				onIsDraw={isDraw}
				onCurrentPlayer={currentPlayer}
				onClick={handleOnClickForStartNewGame} />
		</div>
	);

};

