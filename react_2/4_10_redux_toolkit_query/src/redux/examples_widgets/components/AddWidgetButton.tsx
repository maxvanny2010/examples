import { useAppDispatch } from '../hooks';
import { createWidget } from '../widgetsSlice';

const AddWidgetButton = () => {
	const dispatch = useAppDispatch();

	const handleAdd = () => {
		const newWidget = { id: crypto.randomUUID(), name: 'New Widget' };
		dispatch(createWidget(newWidget));
	};

	return <button onClick={handleAdd}>Add Widget</button>;
};
