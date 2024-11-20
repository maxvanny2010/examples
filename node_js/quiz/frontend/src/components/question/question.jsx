import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../input/input.jsx';
import { ButtonAddNewComponent } from '../button/button-add.jsx';
import { ButtonSaveComponent } from '../button/button-save.jsx';
import { ButtonRemoveComponent } from '../button/button-remove.jsx';
import {
	addStubAnswerAsync,
	closeModal,
	openModal,
	removeAnswerAsync,
	removeQuestionAsync,
	updateQuestionAsync,
} from '../../redux/actions/index.jsx';

const QuestionContainer = ({ className, options = [], id = '', question = '' }) => {
		const dispatch = useDispatch();
		const [openQuestions, setOpenQuestions] = useState({});
		const [updatedQuestion, setUpdateQuestion] = useState('');
		const [answers, setAnswers] = useState([]);
		const [selectOption, setSelectOption] = useState('');

		useEffect(() => {
			setOpenQuestions(id);
			setUpdateQuestion(question);
			if (options.length > 0) setAnswers(options);

			const initCorrectOption = options.find(option => option.isCorrect);
			if (initCorrectOption) {
				setSelectOption(initCorrectOption._id);
			}
		}, [options, question, id]);

		const toggleQuestion = (questionId) => {
			setOpenQuestions((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
		};
		const handleCorrectAnswer = (optionId) => {
			setSelectOption(optionId);
		};
		const handleQuestionInputChange = (value) => {
			setUpdateQuestion(value);
		};

		const handleOptionTextChange = (optionId, value) => {
			setAnswers(prev => prev.map(answer =>
				answer._id === optionId
					? { ...answer, text: value }
					: answer,
			));
		};

		const handleDeleteOption = (id, optionId) => {
			dispatch(removeAnswerAsync(id, optionId));
		};
		const handleDeleteQuestion = (id) => {
			dispatch(openModal({
				text: 'Remove question?',
				onConfirm: () => {
					dispatch(removeQuestionAsync(id));
					dispatch(closeModal());
				},
				onCancel: () => dispatch(closeModal()),
			}));
		};
		const handleStubAnswer = (id) => {
			dispatch(addStubAnswerAsync(id));
		};

		const handleUpdate = (id) => {
			const isEmptyAnswer = answers.filter(answer => answer.text.trim() === '').length === 0;
			if (updatedQuestion !== '' && selectOption !== '' && isEmptyAnswer) {
				const updateAnswers = answers.map(answer => answer._id === selectOption
					? { ...answer, isCorrect: true }
					: { ...answer, isCorrect: false });
				dispatch(updateQuestionAsync(id, {
					id,
					question: updatedQuestion,
					answer: selectOption,
					options: updateAnswers,
				}));
				toggleQuestion(id);
			}
		};
		return (
			<div className={className}>
				<div key={id}
					 className="question-container">
					<div className="question-header"
						 onClick={() => toggleQuestion(id)}
					>
						<h3>Question: {id}</h3>
						<span className="tooggle-arrow">{openQuestions[id] ? '▼' : '▶'}</span>
					</div>
					{openQuestions[id] && (
						<>
							<input
								name={`question-${id}`}
								className="question-input"
								type="text"
								placeholder={`Question: ${id}`}
								value={updatedQuestion}
								onChange={({ target }) => {
									handleQuestionInputChange(target.value);
								}}
							/>
							<div key={`options-${id}`}
								 className="options">
								{answers.map(({ _id: optionId, text }) => (
									<div key={optionId}
										 className="option">
										<label className="option-label">
											<input
												type="radio"
												name={`answer-${id}-${optionId}`}
												className="option-radio"
												checked={selectOption === optionId}
												onChange={() => handleCorrectAnswer(optionId)}
											/>
											<Input
												type="text"
												className={`text-${id}-${optionId}`}
												placeholder="add new answer..."
												value={text}
												onChange={({ target }) =>
													handleOptionTextChange(optionId, target.value)}
											/>
										</label>
										<ButtonRemoveComponent
											onClick={() => handleDeleteOption(id, optionId)}
										>
											🗑
										</ButtonRemoveComponent>
									</div>
								))}
							</div>
							<div className="footer">
								<ButtonAddNewComponent
									type="button"
									onClick={() => handleStubAnswer(id)}>+ New answer
								</ButtonAddNewComponent>
								<div className="manager-buttons">
									<ButtonRemoveComponent
										size="25px"
										onClick={() => handleDeleteQuestion(id)}
									>
										🗑
									</ButtonRemoveComponent>
									<ButtonAddNewComponent
										type="button"
										onClick={() => toggleQuestion(id)}>Cancel
									</ButtonAddNewComponent>
									<ButtonSaveComponent
										type="button"
										onClick={() => handleUpdate(id)}>Save
									</ButtonSaveComponent>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		);
	}
;
export const Question = styled(QuestionContainer)`

`;
QuestionContainer.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	question: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string,
		text: PropTypes.string,
		isCorrect: PropTypes.bool,
	})),
};
