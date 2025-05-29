type OrderModalProps = {
	data?: { success: boolean };
	reset: () => void;
};

export function OrderModal({ data, reset }: OrderModalProps) {
	if (!data?.success) return null;

	return (
		<div className="modal">
			<div className="modal-content">
				<h2>Order confirmed</h2>
				<div className="main-button"
					 onClick={() => {
						 reset();
					 }}>
					Perfect!
				</div>
			</div>
		</div>
	);
}
