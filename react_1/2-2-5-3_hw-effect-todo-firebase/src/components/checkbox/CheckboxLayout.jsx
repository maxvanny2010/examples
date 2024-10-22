export const CheckboxLayout = ({
								   id,
								   completed,
								   isUpdatingStatus,
								   onChange,
							   }) => {

	return (
		<input
			id={`checkbox-${id}`}
			type="checkbox"
			checked={completed}
			disabled={isUpdatingStatus}
			onChange={(e) => onChange(e.target.checked)}
		/>
	);
};
