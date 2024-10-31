import { memo, useCallback, useState } from 'react';
import styles from './CallbackComponent.module.css';
import PropTypes from 'prop-types';

export const Field = memo(
	({ name, label, value, onChange }) => {
		console.log(name);
		return (
			<label>
				<span>{label}: </span>
				<input
					name={name}
					type="number"
					value={value}
					onChange={onChange} />
			</label>
		);
	});
Field.displayName = 'Field';

export const CallbackComponent = () => {
	console.log('-------- Callback ---------');
	const [num, setNum] = useState(0);
	const [degree, setDegree] = useState(0);
	/*
	There’s no need to create internal state with useState()
	for a variable that can be derived from other values
	already present in the internal state! If we can’t
	calculate a variable from the state values and
	need to update this variable within the component,
	then yes, it should have its own state.
	 */
	/*const [result, setResult] = useState(0);*/

	const onNumChange = useCallback(({ target }) => {
		setNum(Number(target.value));
		/*setResult(Math.pow(target.value, degree));*/
	}, [/*degree*/]);

	const onDegreeChange = useCallback(({ target }) => {
		setDegree(Number(target.value));
		/*setResult(Math.pow(num, target.value));*/
	}, [/*num*/]);
	const result = Math.pow(num, degree);
	return (
		<>
			<div className={styles.header}>
				{num} в степени {degree} = {result}
			</div>
			<div className={styles.container}>
				<div className={styles.element}>
					<Field name="num"
						   label="Number"
						   value={num}
						   onChange={onNumChange} />
				</div>
				<div>
					<Field
						name="degree"
						label="Pow"
						value={degree}
						onChange={onDegreeChange}
					/>
				</div>
			</div>
		</>
	);
};

Field.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};
