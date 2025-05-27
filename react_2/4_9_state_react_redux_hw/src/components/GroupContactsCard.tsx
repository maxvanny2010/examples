import React, { memo } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GroupContactsDto } from '../types/dto';

interface GroupContactsCardProps {
	groupContacts: GroupContactsDto,
	withLink?: boolean
}

export const GroupContactsCard = memo<GroupContactsCardProps>(({
																   groupContacts: {
																	   id,
																	   name,
																	   description,
																	   photo,
																	   contactIds,
																   }, withLink,
															   }) => {
	return (
		<Card key={id}
			  className="h-100 d-flex flex-column shadow-sm">
			<Card.Img
				variant="top"
				src={photo}
				style={{ objectFit: 'cover', height: '200px' }}
			/>
			<Card.Header className="fw-bold fs-5 text-primary">
				{withLink ? <Link to={`/groups/${id}`}>{name}</Link> : name}
			</Card.Header>
			<Card.Body className="text-muted">
				{description}
			</Card.Body>
			<Card.Footer className="text-secondary small">
				Contacts: {contactIds.length}
			</Card.Footer>
		</Card>
	);
});
