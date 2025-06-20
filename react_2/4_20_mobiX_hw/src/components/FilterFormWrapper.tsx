import React, { memo } from 'react';
import { Col } from 'react-bootstrap';
import { FilterForm, FilterFormValues } from './FilterForm';
import { GroupContactsDto } from '../types/dto';

interface FilterFormWrapperProps {
	groupsData: GroupContactsDto[];
	onSubmit: (fv: Partial<FilterFormValues>) => void;
}

export const FilterFormWrapper = memo(({ groupsData, onSubmit }: FilterFormWrapperProps) => (
	<Col>
		<FilterForm
			groupContactsList={groupsData}
			initialValues={{}}
			onSubmit={onSubmit}
		/>
	</Col>
));
