import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { contactsStore, groupsStore } from '../ducks/stores';
import { ContactCard, Empty, GroupContactsCard } from '../components';

export const GroupPage = observer(() => {
	const { groupId } = useParams<{ groupId: string }>();

	useEffect(() => {
		contactsStore.get().then(() => {
		});
		groupsStore.get().then(() => {
		});
	}, []);

	const group = groupsStore.data.find(({ id }) => id === groupId);
	const filteredContacts = group
		? contactsStore.data.filter((c) => group.contactIds.includes(c.id))
		: [];

	if (groupsStore.loading || contactsStore.loading) {
		return <p>Loading...</p>;
	}

	if (groupsStore.error || contactsStore.error) {
		return <p>Error loading data</p>;
	}

	if (!group) {
		return <Empty />;
	}

	return (
		<Row className="g-4">
			<Col xxl={12}
				 className="mt-4">
				<h4 className="text-muted">
					Group: <span className="text-primary">{group.name}</span>
				</h4>
				<hr />
			</Col>

			<Col xxl={12}>
				<Row xxl={3}>
					<Col className="mx-auto">
						<GroupContactsCard groupContacts={group} />
					</Col>
				</Row>
			</Col>

			<Col xxl={12}
				 className="mt-4">
				<h4 className="text-muted">Group Contacts</h4>
				<hr />
			</Col>

			<Col>
				<Row className="g-4">
					{filteredContacts.map((contact) => (
						<Col key={contact.id}
							 xxl={3}
							 xl={4}
							 md={6}
							 sm={12}>
							<ContactCard contact={contact}
										 withLink />
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	);
});
