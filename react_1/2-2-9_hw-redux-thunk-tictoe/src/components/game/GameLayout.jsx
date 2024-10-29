import { useSelector } from 'react-redux';

export const GameLayout = ({
							   onClick,
						   }) => {
	const player = useSelector(state => state.statePlayer);
	const isDraw = useSelector(state => state.stateDraw);
	const isGameEnd = useSelector(state => state.stateGameEnd);
	return (
		(!player || isGameEnd || isDraw)
		&& (<button onClick={onClick}>
			Start
		</button>)
	);
};

