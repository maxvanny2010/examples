import styles from './EffectFirebase.module.css';


export const EffectTableFirebaseLayout = ({ products }) => {

	return (
		<div className={styles.container}>
			<table className={styles.centerTable}>
				<thead>
				<tr>
					<th>Firebase</th>
					<th>Database</th>
					<th>Currency</th>
				</tr>
				</thead>
				<tbody>
				{
					Object.entries(products).map(([id, { name, price }]) => (
						<tr key={id}>
							<td>{name}</td>
							<td> {price} </td>
							<td>euro</td>
						</tr>
					))
				}
				</tbody>
			</table>
		</div>
	);
};

