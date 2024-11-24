import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonSort, HeaderTitle } from '../components';
import { ERROR, FIELDS, PAGINATION_LIMIT } from '../constants';
import { Pagination } from './components/pagination.jsx';
import { Search } from './components/search.jsx';
import { getPageRecordsAsync } from '../redux/actions';
import { getRecords, getTotalPages } from '../redux/selectors';

const RecordsComponent = ({ className }) => {
	const dispatch = useDispatch();
	const records = useSelector(getRecords);
	const totalPages = useSelector(getTotalPages);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [debouncedSearchPhrase, setDebouncedSearchPhrase] = useState('');
	useEffect(() => {
		const debounceTimeout = setTimeout(() => {
			setDebouncedSearchPhrase(searchPhrase);
		}, 1500);
		return () => clearTimeout(debounceTimeout);
	}, [searchPhrase]);
	useEffect(() => {
		setIsLoading(true);
		dispatch(getPageRecordsAsync({
			search: debouncedSearchPhrase,
			field: FIELDS.USERNAME,
			limit: PAGINATION_LIMIT,
		}))
			.finally(() => setIsLoading(false));
	}, [dispatch, debouncedSearchPhrase]);
	useEffect(() => {
		setIsLoading(true);
		dispatch(getPageRecordsAsync({
			page: page,
			limit: PAGINATION_LIMIT,
		}))
			.finally(() => setIsLoading(false));
	}, [dispatch, page]);
	const placeholderRows = Array.from({
		length: Math.max(0, PAGINATION_LIMIT - records.length),
	});
	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
	};
	return (
		<div className={className}>
			<HeaderTitle>Records</HeaderTitle>

			<table className="table-records">
				<thead>
				<tr>
					<th className="table-header-item">Date
					</th>
					<th className="table-header-item">Username
						<ButtonSort field={'username'} />
					</th>
					<th className="table-header-item">Phone
						<ButtonSort field={'phone'} />
					</th>
					<th className="table-header-item">Question
					</th>
				</tr>
				</thead>
				<tbody>
				{
					records.length > 0 ? (
							records.map(({ _id, date, username, phone, question }) => ( // Используйте _id
								<tr key={_id}>
									<td className="table-item">
										<span className="day">{date.split(' ')[0]}</span>
										<span className="time">{date.split(' ')[1]}</span>
									</td>
									<td className="table-item">
										{username}
									</td>
									<td className="table-item">
										{phone}
									</td>
									<td className="table-item">
										{question}
									</td>
								</tr>
							)))
						: (
							<tr>
								<td colSpan="4"
									className="records-not-found">{ERROR.RECORDS_NOT_FOUND}
								</td>
							</tr>
						)
				}
				{placeholderRows.map((_, index) => (
					<tr key={`placeholder-${index}`}>
						<td className="table-item">{isLoading ? 'Loading...' : '\u00A0'}</td>
						<td className="table-item">{isLoading ? 'Loading...' : '\u00A0'}</td>
						<td className="table-item">{isLoading ? 'Loading...' : '\u00A0'}</td>
						<td className="table-item">{isLoading ? 'Loading...' : '\u00A0'}</td>
					</tr>
				))}
				<tr>
					<td colSpan="4">
						<Search
							searchPhase={searchPhrase}
							onChange={onSearch}
						/>
					</td>
				</tr>
				<tr>
					<td colSpan="4">
						{
							totalPages > 1 && (<Pagination
								page={page}
								setPage={setPage}
							/>)
						}
					</td>
				</tr>
				</tbody>
			</table>
		</div>
	);
};
export const Records = styled(RecordsComponent)`
	.sort-arrow {

	}

	.day {
		display: block;
		font-size: 14px;
		margin-bottom: 2px;

	}

	.time {
		font-size: 10px;
	}

	.table-records {
		width: 100%;
		border-collapse: collapse;
		color: #555;
		background-color: #fff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.table-records th,
	.table-records td {
		padding: 10px 16px;
		text-align: left;
		border-bottom: 1px solid #ddd;
		font-size: 0.95em;
	}

	.table-records thead th {
		background-color: #f4f4f4;
		color: #555;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-size: 0.9em;
		font-weight: bold;
	}

	.table-records tr:hover {
		background-color: #f1f1f1;
	}

	.table-records tbody tr:last-child td {
		border-bottom: none;
	}

	& td.records-not-found {
		width: 100%;
		text-align: center;
		vertical-align: middle;
		color: crimson;
		font-weight: bold;
	}
`;
RecordsComponent.propTypes = {
	className: PropTypes.string,
};
