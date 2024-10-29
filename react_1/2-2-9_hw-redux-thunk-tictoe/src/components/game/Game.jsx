import { useDispatch } from 'react-redux';

import { TYPE } from '../../constants/TYPE.jsx';
import { Information } from '../info/Information.jsx';
import { Field } from '../field/Field.jsx';
import { GameLayout } from './GameLayout.jsx';

import styles from './Game.module.css';

export const Game = () => {
	const dispatch = useDispatch();
	const handleOnClickForStartNewGame = () => {
		dispatch({ type: TYPE.DRAW_FALSE });
		dispatch({ type: TYPE.GAME_END_FALSE });
		dispatch({ type: TYPE.INIT_FIELDS });
		dispatch({ type: TYPE.INIT_PLAYER });
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

