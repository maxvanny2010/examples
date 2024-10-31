import { memo, useCallback, useMemo, useState } from 'react';
import styles from './MemoComponent.module.css';
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

export const MemoComponent = () => {
	console.log('-------- Memo ---------');
	const [num, setNum] = useState(0);
	const [degree, setDegree] = useState(0);

	/* return the link of callback*/
	const onNumChange = useCallback(({ target }) => {
		setNum(Number(target.value));
	}, []);

	/* return result from memo */
	/*const onNumChange = useMemo(() => {
		return ({ target }) => {
			setNum(target.value);
		};
	}, []);*/

	const onDegreeChange = useCallback(({ target }) => {
		setDegree(Number(target.value));
	}, []);

	/* return result from useMemo uf num change*/
	const hardCalculatedNum = useMemo(
		() => new Array(20000000)
			.fill(0)
			.reduce((res, el) => res + el, Number(num)),
		[num],
	);
	const result = Math.pow(hardCalculatedNum, degree);
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
