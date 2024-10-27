import styles from './Game.module.css';
import { Information } from '../info/Information.jsx';
import { Field } from '../field/Field.jsx';
import { GameLayout } from './GameLayout.jsx';
import { storeFields, storeIsDraw, storeIsGameEnd, storePlayer } from '../../Store.jsx';
import { PLAYER, TYPE } from '../../constants/constants.jsx';


export const Game = () => {

	const handleOnClickForStartNewGame = () => {
		storeIsDraw.dispatch({ type: TYPE.DRAW_FALSE });
		storeIsGameEnd.dispatch({ type: TYPE.GAME_END_FALSE });
		storeFields.dispatch({ type: TYPE.INIT_FIELDS });
		storePlayer.dispatch({
				type: TYPE.SET_PLAYER,
				payload: Math.random() < 0.5 ? PLAYER.X : PLAYER.O,
			},
		);
	};
	return (
		<div className={styles.block}>
			<Information />
			<Field />
			<GameLayout
				onClick={handleOnClickForStartNewGame} />
		</div>
	);
};

