import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Input } from '../../components';

const SearchComponent = ({ className, searchPhase, onChange }) => {
	return (
		<div className={className}>
			<Input id="search"
				   value={searchPhase}
				   onChange={onChange}
				   placeholder="Search by username..."
			/>
		</div>
	);
};
export const Search = styled(SearchComponent)`
	position: relative;
	display: flex;
	margin: 40px auto 0;
	width: 340px;
	height: 42px;
	border: none;
	border-radius: 5px;

	& > input {
		padding: 10px 32px 10px 10px;
	}

	& > div {
		position: absolute;
		top: 50%;
		right: 9px;
		transform: translateY(-50%);
		color: #282626;
	}

`;
SearchComponent.propTypes = {
	className: PropTypes.string,
	searchPhase: PropTypes.string,
	onChange: PropTypes.func,
};
