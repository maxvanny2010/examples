'use client';

import Image from 'next/image';
import { pathImage, sizeImage } from '@/shared/util';

interface Props {
	imageId: string;
	title: string;
}

export const EventImage = ({ imageId, title }: Props) => {
	const src = `${pathImage}${imageId}${sizeImage}`;

	return (
		<div className="lg:col-span-2">
			<Image
				src={src}
				alt={`Event cover. ${title}`}
				className="w-full h-64 lg:h-full object-cover"
				width={600}
				height={400}
			/>
		</div>
	);
};
