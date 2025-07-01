import { act, render, screen } from '@testing-library/react';
import ue from '@testing-library/user-event';
import { App } from 'src/App';
import { tasksSelector } from 'src/store/taskSlice';
import { store } from 'src/store/configureStore';

const userEvent = ue.setup({
	advanceTimers: jest.advanceTimersByTime,
});

it('проверка контракта', async () => {
	render(<App />);

	const inputEl = screen.getByRole('textbox');
	const addBtnEl = screen.getByAltText(/Добавить/i);

	// Wrap the typing action in `act`. This handles the `setValue` calls from onChange.
	await act(async () => {
		await userEvent.clear(inputEl);
		await userEvent.type(inputEl, 'Первый заголовок');
	});

	// Now, wrap the click, which triggers both dispatch and local state reset.
	await act(async () => {
		await userEvent.click(addBtnEl);
	});

	// Repeat for the second task.
	await act(async () => {
		await userEvent.type(inputEl, 'Второй заголовок');
	});

	await act(async () => {
		await userEvent.click(addBtnEl);
	});

	const state = store.getState();

	expect(tasksSelector(state)).toContainEqual({
		id: expect.any(String),
		header: expect.any(String),
		done: expect.any(Boolean),
	});

	// To be even more robust, you might want to assert that there are two tasks
	// and that their content matches what you typed. For example:
	// expect(tasksSelector(state)).toHaveLength(2);
	// expect(tasksSelector(state)[0].header).toBe('Первый заголовок');
	// expect(tasksSelector(state)[1].header).toBe('Второй заголовок');
});