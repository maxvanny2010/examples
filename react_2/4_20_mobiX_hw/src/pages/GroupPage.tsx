import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactCard, Empty, GroupContactsCard } from '../components';
import { useGetContactsQuery, useGetGroupsQuery } from '../ducks/apiSlice';

export const GroupPage = memo(() => {
	const { groupId } = useParams<{ groupId: string }>();


	const { data: contacts = [] } = useGetContactsQuery();
	const { data: groups = [] } = useGetGroupsQuery();

	const group = groups.find(({ id }) => id === groupId);
	const filteredContacts = group
		? contacts.filter((c) => group.contactIds.includes(c.id))
		: [];


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
							<ContactCard
								contact={contact}
								withLink
							/>
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	);
});
