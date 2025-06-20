import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { favoritesStore } from '../ducks/stores';
import { observer } from 'mobx-react-lite';

interface Props {
	id: string;
	className?: string;
}

export const FavoriteToggleButton = observer(({ id, className }: Props) => {
	const HeartIcon = FaHeart as unknown as React.FC;
	const HeartOutlineIcon = FaRegHeart as unknown as React.FC;
	const isFavorite = favoritesStore.isFavorite(id);
	const handleToggle = () => favoritesStore.toggleFavorite(id);

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
