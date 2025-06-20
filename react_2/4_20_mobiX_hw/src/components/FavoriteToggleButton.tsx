import React, { memo, useCallback } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { useAppDispatch, useAppSelector } from '../ducks/hooks';
import { toggleFavorite } from '../ducks/favorite/slice';

interface Props {
	id: string;
	className?: string;
}

export const FavoriteToggleButton = memo(({ id, className }: Props) => {
	const HeartIcon = FaHeart as unknown as React.FC;
	const HeartOutlineIcon = FaRegHeart as unknown as React.FC;
	const dispatch = useAppDispatch();
	const isFavorite = useAppSelector((s) => s.favorites.data.includes(id));

	const handleToggle = useCallback(() => {
		dispatch(toggleFavorite(id));
	}, [dispatch, id]);

	return (
		<span
			role="button"
			onClick={handleToggle}
			className={className}
			style={{ color: isFavorite ? 'red' : 'gray' }}
		>
			{isFavorite ? <HeartIcon /> : <HeartOutlineIcon />}
		</span>
	);
});
