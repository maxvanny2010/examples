import React, { memo, useCallback } from 'react';
import { Col } from 'react-bootstrap';
import { ContactDto } from '../types/dto';
import { ContactCard } from '../components';

interface ContactListItemProps {
	contact: ContactDto;
	isFavorite: boolean;
	onToggleFavorite: (id: string) => void;
}

const ContactListItem = memo(({ contact, isFavorite, onToggleFavorite }: ContactListItemProps) => {
	const handleToggle = useCallback(() => {
		onToggleFavorite(contact.id);
	}, [contact.id, onToggleFavorite]);

	return (
		<Col xxl={3}
			 xl={4}
			 md={6}
			 sm={12}>
			<ContactCard
				contact={contact}
				withLink
				isFavorite={isFavorite}
				onToggleFavorite={handleToggle}
			/>
		</Col>
	);
});

export default ContactListItem;
