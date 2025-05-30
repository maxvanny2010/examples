import { useAppDispatch } from '../hooks';
import { removeWidget } from '../widgetsSlice';

const RemoveWidgetButton = ({ id }: { id: string }) => {
	const dispatch = useAppDispatch();

	return <button onClick={() => dispatch(removeWidget(id))}>Delete</button>;
};
