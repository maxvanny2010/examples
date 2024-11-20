import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ProgressBar } from '../progress-bar/progress-bar.jsx';

const HistoryTestsContainer = ({
								   className,
								   date,
								   success,
								   results,
							   }) => {
	const day = (date.split(' '))[0];
	const time = (date.split(' '))[1];
	return (
		<div className={className}>
			<div className="history-item">
				<div className="history-item-label">
					<div className="day">{day}</div>
					<div className="time">{time}</div>
				</div>
				<div className="history-item-bar">
					<span className="count">0</span>
					<div className="tooltip-wrapper">
						<ProgressBar results={results} />
						<div className="tooltip">
							{`Correct:`}
							<span className="success">{`${success.correctAnswers}`},</span>
							{`Incorrect:`}
							<span className="false">{`${success.totalQuestions - success.correctAnswers}`}</span>
						</div>
					</div>
					<span className="total">{success.totalQuestions}</span>
				</div>
				<div className="history-item-correct">
					{`Correct: ${success.correctAnswers} from ${success.totalQuestions}`}
				</div>
			</div>
		</div>
	);
};
export const HistoryTests = styled(HistoryTestsContainer)`
	width: 100%;
	margin: 0 auto;

	.success {
		margin-left: 3px;
		margin-right: 3px;
		color: #4caf50;
	}

	.false {
		margin-left: 3px;
		margin-right: 3px;
		color: #f44336;
	}

	& .history-item {
		display: flex;
		justify-content: space-between;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 8px;
		margin-bottom: 10px;
		position: relative;
	}

	& .history-item-bar {
		display: flex;
		flex: 3;
		justify-content: space-between;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 8px;
		margin-bottom: 10px;
		position: relative;
	}

	& .history-item-label {
		display: flex;
		flex: 3;
		flex-direction: column;
	}

	& .history-item-correct {
		display: flex;
		justify-content: flex-end;
		font-weight: 500;
		flex: 3;
		margin-top: 11px;
	}

	& .day {
		display: block;
		font-size: 14px;
		margin-top: 6px;
	}

	& .time {
		font-weight: bold;
		font-size: 10px;
		padding-left: 3px;
	}

	.tooltip {
		position: absolute;
		top: -30px;
		left: 50%;
		transform: translateX(-50%);
		background: rgba(0, 0, 0, 0.8);
		color: white;
		font-size: 12px;
		white-space: nowrap;
		border-radius: 4px;
		padding: 5px 10px;
		visibility: hidden;
		opacity: 0;
		transition: visibility 0.2s, opacity 0.2s;
	}

	& .tooltip-wrapper {
		position: relative;
		display: flex;
		width: 100%;
	}

	& .tooltip-wrapper:hover .tooltip {
		visibility: visible;
		opacity: 1;
	}

`;
HistoryTestsContainer.propTypes = {
	className: PropTypes.string,
	date: PropTypes.string,
	success: PropTypes.object,
	results: PropTypes.array,
};
