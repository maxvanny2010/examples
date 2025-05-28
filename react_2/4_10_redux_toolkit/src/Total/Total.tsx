import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { createOrder } from '../redux/orderReducer';
import { selectTotal } from '../redux/totalSelectors';

export function Total() {
	const total = useAppSelector(selectTotal);
	const disableBuyButton = useAppSelector(state => state.order.loading);
	const dispatch = useAppDispatch();

	return <table className="bill">
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
			<td colSpan={2} className="button-cell">
				<button
					className="main-button"
					disabled={disableBuyButton}
					onClick={() => dispatch(createOrder())}
				>
					Buy
				</button>
			</td>
		</tr>
		</tbody>
	</table>;
}
