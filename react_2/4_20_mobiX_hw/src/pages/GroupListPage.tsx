import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Col, Row } from 'react-bootstrap';
import { GroupContactsCard } from '../components';
import { groupsStore } from '../ducks/stores';

export const GroupListPage = observer(() => {
	useEffect(() => {
		groupsStore.get().then(() => {
		});
	}, []);

	const { data: groups, loading, error } = groupsStore;

	if (loading) {
		return <p>Loading groups...</p>;
	}

	if (error) {
		return <p>Error loading groups: {error}</p>;
	}

	return (
		<Row className="g-4">
			{groups.map((group) => (
				<Col key={group.id}
					 xxl={3}
					 xl={4}
					 md={6}
					 sm={12}>
					<GroupContactsCard groupContacts={group}
									   withLink />
				</Col>
			))}
		</Row>
	);
});
