export const List = ({ data }) => (
	<ul>
		{
			data.map(({ name, mark }) => (
				<li key={name}>{name}-{mark}</li>
			))
		}
	</ul>
);

