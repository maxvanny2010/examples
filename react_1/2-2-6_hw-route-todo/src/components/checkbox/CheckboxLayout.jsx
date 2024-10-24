export const CheckboxLayout = ({
								   todo,
								   children,
								   isUpdatingStatus,
								   onChange,
							   }) => {

	return (
		<>
			<div>
				<input
					id={`checkbox-${todo.id}`}
					type="checkbox"
					checked={todo.completed}
					disabled={isUpdatingStatus}
					onChange={(e) => {
						onChange(e.target.checked);
					}}
				/>
				<label htmlFor={`checkbox-${todo.id}`}>{children}</label>
			</div>
		</>
	);
};
