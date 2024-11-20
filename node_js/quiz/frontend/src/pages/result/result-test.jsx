import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../components/index.jsx';
import { Link, useLocation } from 'react-router-dom';

const ResultTestContainer = ({ className }) => {
	const location = useLocation();
	const { success } = location.state;

	return (
		<div className={className}>
			<div className="result-number">
				<span className="title">Correct answers:</span>
				<span className="title green">{`${success.correctAnswers}/${success.totalQuestions}`}</span>

			</div>
			<div className="buttons">
				<Link to={'/'}><Button> 🏠 Home </Button></Link>
				<Link to={'/start'}><Button> Repeat test again </Button></Link>
			</div>

		</div>
	);
};
export const Result = styled(ResultTestContainer)`

	& .buttons {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: 10px;
		margin-bottom: 5px;
	}

	& .title {
		display: block;
		text-align: center;
	}

	& .green {
		color: lightgreen;
	}

`;
ResultTestContainer.propTypes = {
	className: PropTypes.string,
};
