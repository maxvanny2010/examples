import { observer } from 'mobx-react-lite';
import { orderStore } from '../store';

export const OrderModal = observer(() => {
	let status = orderStore.status;

	if (status !== 'success') {
		return null;
	}

	return (
		<div className="modal">
			<div className="modal-content">
				<h2>Order confirmed</h2>
				<div
					className="main-button"
					onClick={orderStore.reset}
				>
					Perfect!
				</div>
			</div>
		</div>
	);
});
