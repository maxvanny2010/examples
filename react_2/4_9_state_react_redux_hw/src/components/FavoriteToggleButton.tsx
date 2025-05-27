import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import React, { memo } from 'react';

interface FavoriteToggleButtonProps {
	isFavorite: boolean;
	onToggle: () => void;
}

export const FavoriteToggleButton = memo(
	({ isFavorite, onToggle }: FavoriteToggleButtonProps) => {

		const HeartIcon = FaHeart as unknown as React.FC;
		const HeartOutlineIcon = FaRegHeart as unknown as React.FC;
		return (
			<span
				role="button"
				onClick={onToggle}
				className="ms-2"
				style={{ color: isFavorite ? 'red' : 'gray' }}
			>
				{isFavorite ? <HeartIcon /> : <HeartOutlineIcon />}
			</span>
		);
	},
);
