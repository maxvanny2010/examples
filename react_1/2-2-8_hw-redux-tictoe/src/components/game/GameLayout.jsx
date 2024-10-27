import { useEffect, useState } from 'react';
import { storeIsDraw, storeIsGameEnd, storePlayer } from '../../Store.jsx';
import PropTypes from 'prop-types';

export const GameLayout = ({
							   onClick,
						   }) => {
	const [player, setPlayer] = useState(storePlayer.getState());
	const [isDraw, setIsDraw] = useState(storeIsDraw.getState());
	const [isGameEnd, setIsGameEnd] = useState(storeIsGameEnd.getState());
	useEffect(() => {
		const unsubscribePlayer = storePlayer.subscribe(() => {
			setPlayer(storePlayer.getState());
		});
		const unsubscribeIsDraw = storeIsDraw.subscribe(() => {
			setIsDraw(storeIsDraw.getState());
		});
		const unsubscribeIsGameEnd = storeIsGameEnd.subscribe(() => {
			setIsGameEnd(storeIsGameEnd.getState());
		});
		return () => {
			unsubscribePlayer();
			unsubscribeIsDraw();
			unsubscribeIsGameEnd();
		};
	}, []);
	return (
		(!player || isGameEnd || isDraw)
		&& (<button onClick={onClick}>
			Start
		</button>)
	);
};

GameLayout.propTypes = {
	onClick: PropTypes.func.isRequired,
};
