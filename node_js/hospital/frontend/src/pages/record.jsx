import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addRecordAsync } from '../redux/actions';
import { ERROR, SUCCESS } from '../constants';
import { Button, HeaderTitle, Input, ToolTip } from '../components';
import { getCurrentDateTime } from './util/get-current-date-time.jsx';

const formDataSchema = yup.object().shape({
	username: yup.string()
		.required('Username is required')
		.matches(/^[a-zA-Z]+(\s[a-zA-Z]+){0,2}$/, 'FIO isn\'t correct')
		.min(9, 'FIO: min 9 symbols')
		.max(18, 'FIO: max 18 symbols'),
	phone: yup.string()
		.required('Phone is required')
		.matches(/^\+?\d{0,2} ?\d{0,2}$/, 'Phone isn\'t correct')
		.min(6, 'Phone: min 6 symbols')
		.max(6, 'Phone: max 6 symbols'),
	question: yup.string()
		.optional()
		.matches(/^[a-zA-Z0-9]*$/, 'Question isn\'t correct'),
});

const RecordComponent = ({ className }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [errorServer, setErrorServer] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isFormValid, setIsFormValid] = useState(true);
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			username: '',
			phone: '',
			question: '',
		},
		resolver: yupResolver(formDataSchema),
	});

	const onSubmit = async ({ username, phone, question }) => {
		if (Object.keys(errors).length > 0) {
			setIsFormValid(false);
			return;
		}
		setIsLoading(true);
		setIsFormValid(true);
		try {
			phone = phone.slice(1).replaceAll(' ', '');
			const result = await addRecordAsync({
				date: getCurrentDateTime(),
				username,
				phone,
				question,
			});
			if (result.res) {
				reset();
				setIsSuccess(true);
				setTimeout(() => {
					setIsSuccess(false);
				}, 2000);
			} else setErrorServer(ERROR.SERVER_FAILED);
		} catch (error) {
			setErrorServer(error?.message ? ERROR.SERVER_FAILED : '');
		} finally {
			setIsLoading(false);
		}

	};

	useEffect(() => {
		const error = errors?.username?.message
			|| errors?.phone?.message
			|| errors?.question?.message;
		setErrorMessage(error || errorServer);
	}, [errors, errorServer]);

	useEffect(() => {
		if (errorMessage) {
			const timeout = setTimeout(() => {
				setErrorMessage('');
			}, 1000);
			return () => clearTimeout(timeout);
		}
	}, [errorMessage]);

	return (
		<div className={className}>
			<HeaderTitle>Record</HeaderTitle>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="username... min 3 symbols"
					{...register('username', {
							onChange: () => setErrorServer(null),
						},
					)}

				/>
				<Input
					type="text"
					placeholder="+xx xx"
					{...register('phone', {
							onChange: () => setErrorServer(null),
						},
					)}
				/>
				<textarea className="textarea"
						  id="question"
						  placeholder="your question here..."
						  {...register('question', {
							  onChange: () => setErrorServer(null),
						  })}

				/>
				<Button type="submit"
						disabled={isLoading || !isFormValid}>
					{isLoading ? 'Loading...' : 'Submit'}
				</Button>
				{isSuccess && <ToolTip message={SUCCESS.RECORD_CONFIRM}
									   success={true} />}
				{!isFormValid && <ToolTip message={ERROR.FORM_NOT_VALID} />}
				{errorMessage && <ToolTip message={errorMessage} />}
			</form>
		</div>

	);
};
export const Record = styled(RecordComponent)`

	& textarea {
		width: 100%;
		resize: none;
		font-size: 16px;
		color: #242424;
		background: #d3d3d3;
		height: 120px;
		margin-bottom: 5px;
	}
`;
RecordComponent.propTypes = {
	className: PropTypes.string,
};
