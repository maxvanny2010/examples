import { act, render, screen, waitFor } from '@testing-library/react';
import ue from '@testing-library/user-event';
import { App } from 'src/App';

const userEvent = ue.setup({
	advanceTimers: jest.advanceTimersByTime,
});

it('показывает только выполненные задачи, если они есть', async () => {
	render(<App />);

	const inputEl = screen.getByRole('textbox');
	const addBtnEl = screen.getByAltText(/Добавить/i);

	// Add first task
	await act(async () => {
		await userEvent.clear(inputEl);
		await userEvent.type(inputEl, 'Первая задача');
		await userEvent.click(addBtnEl);
	});

	await waitFor(() => {
		expect(screen.getByText('Первая задача')).toBeInTheDocument();
	});

	// Add second task
	await act(async () => {
		await userEvent.type(inputEl, 'Вторая задача');
		await userEvent.click(addBtnEl);
	});

	await waitFor(() => {
		expect(screen.getByText('Вторая задача')).toBeInTheDocument();
	});

	// Now, find the checkboxes.
	const checkboxes = await screen.findAllByRole('checkbox');

	// Отмечаем первую задачу как выполненную
	await act(async () => {
		await userEvent.click(checkboxes[0]);
	});

	const filterCompletedBtn = await screen.findByRole('button', { name: /Выполненные/i });
	// Or if it has an alt text on an image inside it:
	// const filterCompletedBtn = await screen.findByRole('button', { name: /фильтр выполненных/i }); // Or the alt text of an icon inside the button

	// Включаем фильтр
	await act(async () => {
		await userEvent.click(filterCompletedBtn);
	});

	// Wait for the filter results to update the DOM
	await waitFor(() => {
		expect(screen.getByText('Первая задача')).toBeInTheDocument();
		expect(screen.queryByText('Вторая задача')).not.toBeInTheDocument(); // Expect the uncompleted task to be hidden
	});
});