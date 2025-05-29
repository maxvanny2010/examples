type TotalProps = {
	total: { subtotal: number; tax: number; total: number };
	createOrder: () => void;
	isLoading: boolean;
};

export function Total({ total, createOrder, isLoading }: TotalProps) {
	return (
		<table className="bill">
			<tbody>
			<tr className="subtotal">
				<td className="label">Subtotal :</td>
				<td className="value">$ {total.subtotal}</td>
			</tr>
			<tr className="salestax">
				<td className="label">Sales tax :</td>
				<td className="value">$ {total.tax}</td>
			</tr>
			<tr className="total">
				<td className="label">Total :</td>
				<td className="value">$ {total.total}</td>
			</tr>
			<tr>
				<td colSpan={2}
					className="button-cell">
					<button className="main-button"
							disabled={isLoading}
							onClick={() => createOrder()}>
						Buy
					</button>
				</td>
			</tr>
			</tbody>
		</table>
	);
}
