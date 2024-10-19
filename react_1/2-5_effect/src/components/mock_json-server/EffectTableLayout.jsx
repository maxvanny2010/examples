import styles from './EffectMockJsonServer.module.css';


export const EffectTableLayout = ({ products }) => {

	return (
		<div className={styles.container}>
			<table className={styles.centerTable}>
				<thead>
				<tr>
					<th>Local DB</th>
					<th>Json-Server</th>
					<th>Currency</th>
				</tr>
				</thead>
				<tbody>
				{
					products.map(({ id, name, price }) => (
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

