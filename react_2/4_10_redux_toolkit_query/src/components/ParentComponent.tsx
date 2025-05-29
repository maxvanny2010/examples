import { useCreateOrderMutation } from '../redux/orderReducer';
import { useAppSelector } from '../redux/hooks';
import { selectTotal } from '../redux/selectors';
import { Total } from './Total';
import { OrderModal } from './OrderModal';

export function ParentComponent() {
	const [createOrder, { data, isLoading, reset }] = useCreateOrderMutation({ fixedCacheKey: 'order' });
	const total = useAppSelector(selectTotal);
	return (
		<>
			<Total total={total}
				   createOrder={createOrder}
				   isLoading={isLoading} />
			<OrderModal data={data}
						reset={reset} />
		</>
	);
}
