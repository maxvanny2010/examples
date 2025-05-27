import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { ContactDto } from '../types/dto';

interface ContactCardProps {
	contact: ContactDto;
	withLink?: boolean;
	favoriteIds?: string[];
	onToggleFavorite?: (id: string) => void;
}

export const ContactCard = memo<ContactCardProps>(({
													   contact: { photo, id, name, phone, birthday, address },
													   withLink,
													   favoriteIds = [],
													   onToggleFavorite,
												   }) => {
	const isFavorite = favoriteIds.includes(id);

	return (
		<Card key={id}
			  className="h-100 d-flex flex-column shadow-lg position-relative">
			<Card.Img variant="top"
					  src={photo}
					  style={{ objectFit: 'cover', height: '200px' }} />
			<Card.Body>
				<Card.Title className="fw-bold fs-5 text-primary d-flex justify-content-between align-items-start">
					<span>{withLink ? <Link to={`/contact/${id}`}>{name}</Link> : name}</span>
					<span
						role="button"
						onClick={() => onToggleFavorite?.(id)}
						className="ms-2"
						style={{ color: isFavorite ? 'red' : 'gray' }}
					>
						{isFavorite ? <FaHeart /> : <FaRegHeart />}
					</span>
				</Card.Title>
				<ListGroup variant="flush">
					<ListGroup.Item className="text-muted">
						<Link to={`tel:${phone}`}
							  target="_blank">{phone}</Link>
					</ListGroup.Item>
					<ListGroup.Item className="text-muted">{birthday}</ListGroup.Item>
					<ListGroup.Item className="text-muted">{address}</ListGroup.Item>
				</ListGroup>
			</Card.Body>
		</Card>
	);
});