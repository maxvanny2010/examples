import { useSelector } from 'react-redux';

import { useState } from 'react';
import { NewTaskBar } from './modules/NewTaskBar';
import { TaskList } from './modules/TaskList';
import { NotifierContainer } from './modules/NotifierContainer';
import { Filter } from './components/Filter';
import { tasksSelector } from './store/taskSlice';

export const AppInner = () => {
	const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

	const tasks = useSelector(tasksSelector);

	const filteredTasks = tasks.filter((task) => {
		if (filter === 'active') return !task.done;
		if (filter === 'completed') return task.done;
		return true;
	});

	return (
		<div className="root-container">
			<h3>Список задач</h3>
			<NewTaskBar />
			<TaskList items={filteredTasks} />
			<NotifierContainer />
			<Filter currentFilter={filter}
					onChange={setFilter} />
		</div>
	);
};
