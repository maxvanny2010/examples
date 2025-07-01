import { render } from '@testing-library/react';
import { List } from 'src/components/List';
import { configureStore } from '@reduxjs/toolkit';
import { addTask, taskListSlice } from 'src/store/taskSlice';

it('отображение списка задач', () => {
	const onDelete = jest.fn();
	const onToggle = jest.fn();

	const items: Task[] = [
		{
			id: '1',
			header: 'купить хлеб',
			done: false,
		},
		{
			id: '2',
			header: 'купить молоко',
			done: false,
		},
		{
			id: '3',
			header: 'выгулять собаку',
			done: true,
		},
	];

	const { rerender, asFragment } = render(
		<List items={items}
			  onDelete={onDelete}
			  onToggle={onToggle} />,
	);
	const firstRender = asFragment();

	items.pop();

	rerender(<List items={items}
				   onDelete={onDelete}
				   onToggle={onToggle} />);
	const secondRender = asFragment();

	expect(firstRender).toMatchDiffSnapshot(secondRender);
});

it('не добавляет задачу, если уже есть 10 невыполненных', () => {
	const preloadedState = {
		taskList: {
			list: Array.from({ length: 10 }, (_, i) => ({
				id: `${i}`,
				header: `Задача ${i}`,
				done: false,
			})),
			notification: '',
		},
	};

	const store = configureStore({ reducer: { taskList: taskListSlice.reducer }, preloadedState });
	store.dispatch(addTask('Новая задача'));

	const state = store.getState();
	expect(state.taskList.list).toHaveLength(10);
	expect(state.taskList.list.some(t => t.header === 'Новая задача')).toBe(false);
});

