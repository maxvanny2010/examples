import React, { memo } from 'react';
import { Row } from 'react-bootstrap';
import { FilterFormValues, FilterFormWrapper } from '../components';
import ContactListItem from '../components/ContactListItem';
import { ContactDto } from '../types/dto';

type FilterRowProps = {
	groupsData: any[];
	onSubmit: (fv: Partial<FilterFormValues>) => void;
};

export const FilterRow = memo(({ groupsData, onSubmit }: FilterRowProps) => {
	return (
		<Row className="mb-3">
			<FilterFormWrapper groupsData={groupsData}
							   onSubmit={onSubmit} />
		</Row>
	);
});

type ContactsRowProps = {
	contacts: ContactDto[];
};

export const ContactsRow = memo(({ contacts }: ContactsRowProps) => {
	return (
		<Row className="g-4">
			{contacts.map((contact) => (
				<ContactListItem
					key={contact.id}
					contact={contact}
				/>
			))}
		</Row>
	);
});
