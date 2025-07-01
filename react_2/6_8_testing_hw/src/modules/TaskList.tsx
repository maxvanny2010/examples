import { useDispatch } from 'react-redux';
import { Empty } from 'src/components/Empty';
import { List } from 'src/components/List';
import { deleteTask, toggleTask } from 'src/store/taskSlice';

type Props = {
	items: Task[];
};
export const TaskList = ({ items }: Props) => {
	const dispatch = useDispatch();

	const handleDelete = (id: Task['id']) => {
		dispatch(deleteTask(id));
	};

	const handleToggle = (id: Task['id']) => {
		dispatch(toggleTask(id));
	};

	return items.length > 0 ? (
		<List items={items}
			  onDelete={handleDelete}
			  onToggle={handleToggle} />
	) : (
		<Empty />
	);
};
