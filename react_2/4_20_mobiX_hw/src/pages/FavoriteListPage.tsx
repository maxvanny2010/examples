import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Col, Row } from 'react-bootstrap';

import { ContactCard } from '../components';
import { contactsStore } from '../ducks/stores';

export const FavoriteListPage = observer(() => {
	useEffect(() => {
		contactsStore.get().then(() => {
		});
	}, []);
	const favoriteContacts = contactsStore.favoriteContacts;
	return (
		<Row xxl={4}
			 className="g-4">
			{favoriteContacts.map(contact => (
				<Col key={contact.id}>
					<ContactCard contact={contact}
								 withLink />
				</Col>
			))}
		</Row>
	);
});
