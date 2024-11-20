import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/index.jsx';
import { selectTest } from '../../redux/selectors/index.jsx';
import { loadTestDataAsync } from '../../redux/actions/index.jsx';
import { getFormattedDate, HISTORY } from '../../utils/index.jsx';

const StartTestContainer = ({ className }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectOption, setSelectOption] = useState('');
	const test = useSelector(selectTest);

	let optionCorrectIndexes = useRef([]);

	useEffect(() => {
		dispatch(loadTestDataAsync());
	}, [dispatch]);

	useEffect(() => {
		const handleBeforeUnload = () => sessionStorage.clear();
		window.addEventListener('beforeunload', handleBeforeUnload);
		return () => window.removeEventListener('beforeunload', handleBeforeUnload);
	});
	const getSuccess = () => {
		return optionCorrectIndexes.current.filter(({ success }) => success);
	};

	const handleChooseAnswer = (index) => {
		setSelectOption(index);
	};

	const handleComplete = () => {
		return {
			correctAnswers: getSuccess().length,
			totalQuestions: test.length,
		};
	};
	const setSessionData = (success) => {
		const getResults = JSON.parse(sessionStorage.getItem(HISTORY.STORAGE_NAME)) || [];
		let newObj = {
			id: Date.now(),
			date: getFormattedDate(),
			results: optionCorrectIndexes.current,
			success,
		};
		const updatedResults = [...getResults, newObj];
		sessionStorage.setItem(HISTORY.STORAGE_NAME, JSON.stringify(updatedResults));
	};
	const handlerNextMove = (options, last) => {
		const currentOption = options.find(({ _id }) => _id === selectOption);
		if (!currentOption) return;

		const updatedIndexes = optionCorrectIndexes.current
			.filter(obj => obj.index !== currentIndex);
		optionCorrectIndexes.current = [...updatedIndexes, {
			index: currentIndex,
			success: currentOption.isCorrect,
		}];

		if (currentIndex === last) {
			const success = handleComplete();
			setSessionData(success);
			navigate(`/result`, { state: { success } });
		} else {
			setSelectOption('');
			setCurrentIndex((prev) => Math.min(prev + 1, last));
		}
	};

	if (test.length === 0) {
		return <div>Loading...</div>;
	}
	const last = test.length - 1;
	let { question, options = [] } = test[currentIndex];
	return (
		<div className={className}>
			<div className="buttons">
				<Button color={currentIndex === last ? '#efe419' : ''}
						onClick={() => {
							handlerNextMove(options, last);
						}}
						disabled={selectOption === ''}
				>
					{currentIndex !== last ? 'Next' : 'Complete'}
				</Button>
				<Button
					onClick={() => {
						setSelectOption('');
						setCurrentIndex((prev) => Math.max(prev - 1, 0));
					}
					}
					disabled={currentIndex === 0}
				>
					Before
				</Button>
			</div>

			<div className="question-number">{`${currentIndex + 1}/${test.length}`}</div>
			<div className="question-text">Question: {question}</div>
			<div className="options">
				{options.map((option, idx) => (
					<div key={idx}
						 className="option">
						<label
							className="option-label">
							<input
								type="radio"
								name={`answer-${idx}`}
								value={option._id}
								checked={selectOption === option._id}
								onChange={() => handleChooseAnswer(option._id)}
							/>
							{option._id}
						</label>
					</div>
				))}
			</div>
		</div>
	);
};
export const StartTest = styled(StartTestContainer)`

	& .buttons {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: 10px;
		margin-bottom: 5px;
	}

	& .question-number {
		text-align: center;
	}

	.& .option {
		margin-bottom: 10px;
	}
`;
StartTestContainer.propTypes = {
	className: PropTypes.string,
};
