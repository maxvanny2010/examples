import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';
import { ContactDto } from '../types/dto';
import { FavoriteToggleButton } from './FavoriteToggleButton';

interface ContactCardProps {
	contact: ContactDto;
	withLink?: boolean;
	isFavorite?: boolean;
	onToggleFavorite?: (id: string) => void;
}

export const ContactCard = memo<ContactCardProps>(
	({
		 contact: { photo, id, name, phone, birthday, address },
		 withLink,
	 }) => {

		return (
			<Card
				key={id}
				className="h-100 d-flex flex-column shadow-lg position-relative"
			>
				<Card.Img
					variant="top"
					src={photo}
					style={{ objectFit: 'cover', height: '200px' }}
				/>
				<Card.Body className="position-relative">
					<Card.Title className="fw-bold fs-5 text-primary d-flex justify-content-between align-items-start">
						<span>{withLink ? <Link to={`/contact/${id}`}>{name}</Link> : name}</span>
					</Card.Title>
					<FavoriteToggleButton
						id={id}
						className="position-absolute top-0 mt-2 end-0 me-2"
					/>
					<ListGroup variant="flush">
						<ListGroup.Item className="text-muted">
							<Link to={`tel:${phone}`}
								  target="_blank">
								{phone}
							</Link>
						</ListGroup.Item>
						<ListGroup.Item className="text-muted">{birthday}</ListGroup.Item>
						<ListGroup.Item className="text-muted">{address}</ListGroup.Item>
					</ListGroup>
				</Card.Body>
			</Card>
		);
	},
);
