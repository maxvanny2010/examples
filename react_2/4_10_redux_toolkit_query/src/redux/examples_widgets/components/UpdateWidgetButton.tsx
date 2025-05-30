import { useAppDispatch } from '../hooks';
import { updateWidget } from '../widgetsSlice';
import { Widget } from '../types';

type UpdateWidgetButtonProps = {
	widget: Widget;
};
/* alternative type
interface Props {
  widget: Widget;
}
* */
const UpdateWidgetButton = ({ widget }: UpdateWidgetButtonProps) => {
	const dispatch = useAppDispatch();

	const handleUpdate = () => {
		const updatedWidget = { ...widget, name: 'Updated Name' };
		dispatch(updateWidget(updatedWidget));
	};

	return <button onClick={handleUpdate}>Update</button>;
};
