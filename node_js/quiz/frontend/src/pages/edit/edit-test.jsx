import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectTest } from '../../redux/selectors/index.jsx';
import { addQuestionAsync, loadTestDataAsync } from '../../redux/actions/index.jsx';
import { ButtonAddNewComponent, Question } from '../../components/index.jsx';

const EditTestContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const test = useSelector(selectTest);
	useEffect(() => {
		dispatch(loadTestDataAsync());
	}, [dispatch]);


	const handleAddNewQuestionTemplate = () => {
		dispatch(addQuestionAsync());
	};

	return (
		<div className={className}>
			<div className="header">
				<ButtonAddNewComponent
					type="button"
					onClick={() => navigate('/')}
				>
					HOME
				</ButtonAddNewComponent>
				<ButtonAddNewComponent
					type="button"
					onClick={handleAddNewQuestionTemplate}
				>
					+ New Question
				</ButtonAddNewComponent>
			</div>
			{test.map(({ _id, question, options }) => (
				<Question
					key={_id}
					id={_id}
					question={question}
					options={options} />
			))}
		</div>
	);
};

export const EditTest = styled(EditTestContainer)`
	.header {
		display: flex;
		justify-content: space-between;
		margin: 0 0 10px 0;
	}

	.question-container {
		border: 1px solid #ddd;
		padding: 20px;
		margin-bottom: 20px;
		border-radius: 8px;
	}

	.question-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		padding: 10px;
		background-color: #333;
		color: #fff;
		border-radius: 8px;
		margin-bottom: 10px;
	}

	.toggle-arrow {
		font-size: 18px;
	}

	.question-input {
		all: unset;
		width: 95%;
		padding: 10px;
		font-size: 16px;
		background-color: rgba(43, 43, 43, 1);
		border-bottom: 1px solid #ccc;
		margin-bottom: 20px;
	}

	.question-input:focus {
		outline: none;
		border-bottom: 2px solid #ccc;
	}

	.option {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10px;
		margin-top: 20px;
	}

	.option-label {
		display: flex;
		align-items: center;
	}

	.option-radio {
		margin-right: 10px;
	}

	.delete-button {
		background: none;
		border: none;
		color: #dacbcb;
		cursor: pointer;
		font-size: 20px;
		padding: 10px 10px;
		border-radius: 4px;
	}

	.delete-button:hover {
		color: #f5f5f5;
		background-color: #191c21;
	}

	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
	}

	.manager-buttons {
		display: flex;
		justify-content: space-between;
	}
`;

EditTestContainer.propTypes = {
	className: PropTypes.string,
};
