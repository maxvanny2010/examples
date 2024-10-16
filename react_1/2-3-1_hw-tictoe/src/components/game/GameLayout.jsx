export const GameLayout = ({
							   onIsGameEnd,
							   onIsDraw,
							   onCurrentPlayer,
							   onClick,
						   }) => {
	return (
		(!onCurrentPlayer || onIsGameEnd || onIsDraw) && <button
			onClick=
				{
					onClick
				}
		>
			Start
		</button>
	);
};

