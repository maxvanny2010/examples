import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { contactsStore } from '../ducks/stores';
import { ContactCard, Empty } from '../components';

export const ContactPage = observer(() => {
	const { contactId } = useParams<{ contactId: string }>();

	useEffect(() => {
		contactsStore.get().then(() => {
		});
	}, []);

	const contact = contactsStore.data.find(c => c.id === contactId);

	if (contactsStore.data.length === 0) {
		return <p>Loading...</p>;
	}

	return (
		<Row xxl={3}>
			<Col className="mx-auto">
				{contact ? (
					<ContactCard contact={contact} />
				) : (
					<Empty />
				)}
			</Col>
		</Row>
	);
});
