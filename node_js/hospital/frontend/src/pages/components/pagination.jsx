import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../components';
import { useSelector } from 'react-redux';
import { getTotalPages } from '../../redux/selectors';

const PaginationComponent = ({
								 className,
								 page,
								 setPage,
							 }) => {
	const totalPages = useSelector(getTotalPages);
	return (
		<div className={className}>
			<Button
				disabled={page === 1}
				width="20px"
				margin="4px 4px 0 0"
				onClick={() => setPage(1)}
			>
				{'\u25C1'}
			</Button>
			<Button
				disabled={page === 1}
				width="20px"
				onClick={() => setPage(page - 1)}
			>
				{'\u25C0'}
			</Button>
			<div className="current-page">{page}</div>
			<Button
				disabled={page === totalPages}
				width="20px"
				onClick={() => setPage(page + 1)}
			>
				{'\u25B6'}
			</Button>
			<Button
				disabled={page === totalPages}
				width="20px"
				onClick={() => setPage(totalPages)}
			>
				{'\u25B7'}
			</Button>
		</div>
	);
};
export const Pagination = styled(PaginationComponent)`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 0 3px;

	& button {
		width: 30px;
		height: 30px;
		display: flex;
		font-size: 16px;
		margin: 7px 4px 0 0;
		align-items: center;
		justify-content: center;
		background-color: #6b6a6a;
		color: #d0cdcd;

		&:hover {
			color: ${({ disabled }) => (disabled ? '' : 'white')};
			background-color: ${({ disabled }) => (disabled ? '' : '#747bff')};
			cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
		}
	}

	& .current-page {
		width: 50px;
		height: 40px;
		text-align: center;
		margin: 2px 8px 0 5px;
		padding-top: 8px;
		color: #747bff;
		border: 1px dotted #b4b3b3;
		border-radius: 5px;
	}
`;
PaginationComponent.propTypes = {
	className: PropTypes.string,
	page: PropTypes.number,
	setPage: PropTypes.func,
	totalPages: PropTypes.number,
};
