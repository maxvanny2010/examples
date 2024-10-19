import styles from './EffectJsonPlaceholder.module.css';


export const EffectTableLayout = ({ products }) => {

	return (
		<div className={styles.container}>
			<table className={styles.centerTable}>
				<thead>
				<tr>
					<th>
						JsonPlaceholder
					</th>
				</tr>
				</thead>
				<tbody>
				{
					products.map(({ id, title, body }, index) => (
						<tr key={`${id}-${index}`}>
							<td>{title}<br /><br />{body} </td>

						</tr>
					))
				}
				</tbody>
			</table>
		</div>
	);
};

