import React, { memo } from 'react';
import { Col } from 'react-bootstrap';
import { ContactDto } from '../types/dto';
import { ContactCard } from '../components';

interface ContactListItemProps {
	contact: ContactDto;
}

const ContactListItem = memo(({ contact }: ContactListItemProps) => {

	return (
		<Col xxl={3}
			 xl={4}
			 md={6}
			 sm={12}>
			<ContactCard
				contact={contact}
				withLink
			/>
		</Col>
	);
});

export default ContactListItem;
