import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecords } from '../../redux/selectors';
import { getPageRecordsAsync } from '../../redux/actions';
import { PAGINATION_LIMIT } from '../../constants';

const ButtonSortComponent = ({ className, field }) => {
	const dispatch = useDispatch();
	const records = useSelector(getRecords);
	const [sort, setSort] = useState(false);
	const [isSorting, setIsSorting] = useState(false);
	const handleSort = async (field) => {
		setIsSorting(true);
		const direction = sort ? 'asc' : 'desc';
		const result = await dispatch(getPageRecordsAsync({
			field: field,
			sort: direction,
			limit: PAGINATION_LIMIT,
		}));
		if (result) {
			setIsSorting(false);
			setSort(!sort);
		}
	};

	return (
		<>
			<button
				type="button"
				className={className}
				disabled={records.length === 0 || isSorting}
				onClick={async (event) => {
					event.stopPropagation();
					await handleSort(field);
				}}
			>{sort ? '▲' : '▼'}
			</button>
		</>
	);
};
export const ButtonSort = styled(ButtonSortComponent)`
	all: unset;
	cursor: pointer;
	font-size: 0.8em;
	color: #555;
	margin-left: 8px;

	&:hover {
		color: #000;
	}

	&[disabled] {
		cursor: default;
		color: #ccc;
		opacity: 0.5;
	}

	&[disabled]:hover {
		color: #ccc;
		opacity: 0.5;
	}
`;
ButtonSortComponent.propTypes = {
	className: PropTypes.string,
	field: PropTypes.string,
};
