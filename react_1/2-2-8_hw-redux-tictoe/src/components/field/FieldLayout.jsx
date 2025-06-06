import styles from './FieldLayout.module.css';
import { storeFields } from '../../Store.jsx';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const FieldLayout = ({ onClick }) => {
	const [fields, setFields] = useState(storeFields.getState());
	useEffect(() => {

		const unsubscribeFields = storeFields.subscribe(() => {
			setFields(storeFields.getState());
		});
		return () => unsubscribeFields();

	}, []);
	const rows = fields.reduce((acc, field, index) => {
		if (index % 3 === 0) {
			acc.push(fields.slice(index, index + 3));
		}
		return acc;
	}, []);
	return (
		<table>
			<tbody>
			{
				rows.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{
								row.map((cell, cellIndex) => (
										<td
											key={rowIndex + cellIndex}
											className={cell !== '' ? styles.marked : styles.cell}
											onClick=
												{
													(event) =>

														onClick(event, rowIndex * 3 + cellIndex)
												}
										>
											{cell}
										</td>
									),
								)

							}
						</tr>
					),
				)
			}
			</tbody>
		</table>
	)
		;
};
FieldLayout.propTypes = {
	onClick: PropTypes.func.isRequired,
};
