import React, { FC, useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactCard, Empty } from '../components';
import { useGetContactsQuery } from '../ducks/apiSlice';

export const ContactPage: FC = () => {
	const { contactId } = useParams<{ contactId: string }>();

	const { data: contacts = [], isLoading, error } = useGetContactsQuery();


	const contact = useMemo(
		() => contacts.find((c) => c.id === contactId),
		[contacts, contactId],
	);

	return (
		<Row xxl={3}>
			<Col className="mx-auto">
				{isLoading ? (
					<p>Loading...</p>
				) : error ? (
					<p>Error loading contact</p>
				) : contact ? (
					<ContactCard
						contact={contact}
					/>
				) : (
					<Empty />
				)}
			</Col>
		</Row>
	);
};
