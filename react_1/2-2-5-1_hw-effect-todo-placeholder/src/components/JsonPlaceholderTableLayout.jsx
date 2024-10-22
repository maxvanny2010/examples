import styles from './JsonPlaceholderComponent.module.css';

export const JsonPlaceholderTableLayout = ({ todos }) => {

	return (
		<table className={styles.centerTable}>
			<thead>
			<tr>
				<th>{'JsonPlaceholder todo list'}</th>
			</tr>
			</thead>
			<tbody>
			{
				todos.map(({ _, id, title, completed }) => (
					<tr key={id}>
						<td>
							<span className={completed ? styles.completed : styles.uncompleted}>
								{completed ? '\u2714' : '\u2716'}
							</span>
							<span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
							{title}
						</td>
					</tr>),
				)
			}
			</tbody>
		</table>
	);
};
