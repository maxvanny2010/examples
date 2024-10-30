import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

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

GameLayout.propTypes = {
	onClick: PropTypes.func.isRequired,
};
