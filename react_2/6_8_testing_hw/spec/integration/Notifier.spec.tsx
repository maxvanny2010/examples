import { act, render, screen, waitFor } from '@testing-library/react'; // Ensure waitFor is imported
import ue from '@testing-library/user-event';
import { App } from 'src/App'; // Assuming App is the root component

const userEvent = ue.setup({
	advanceTimers: jest.advanceTimersByTime,
});

it('Оповещение при вополнении задачи: появляется и содержит заголовок задачи', async () => {
	render(<App />);

	const input = screen.getByRole('textbox');
	const addButton = screen.getByAltText(/Добавить/i);

	// Add a task
	await act(async () => {
		await userEvent.type(input, 'Оповещение');
		await userEvent.click(addButton); // Or fireEvent.keyDown(input, { key: 'Enter' }); if you prefer
	});

	// Crucially, wait for the task and its checkbox to appear in the DOM
	await waitFor(() => {
		expect(screen.getByText('Оповещение')).toBeInTheDocument();
	});

	// Now, find the checkbox. It should exist.
	const checkbox = await screen.findByRole('checkbox'); // Use findByRole to wait for it

	// Click the checkbox to complete the task
	await act(async () => { // Wrap the click in act
		await userEvent.click(checkbox);
	});

	// Wait for the notification to appear.
	const notification = await screen.findByText(/Задача "Оповещение" завершена/i);
	expect(notification).toBeInTheDocument();
});

it('Оповещение при вополнении задачи: одновременно отображается только одно оповещение', async () => {
	render(<App />);

	const input = screen.getByRole('textbox');
	const addButton = screen.getByAltText(/Добавить/i);

	// Add first task
	await act(async () => {
		await userEvent.type(input, 'Задача 1');
		await userEvent.click(addButton);
	});
	await waitFor(() => {
		expect(screen.getByText('Задача 1')).toBeInTheDocument();
	});


	// Add second task
	await act(async () => {
		await userEvent.type(input, 'Задача 2');
		await userEvent.click(addButton);
	});
	await waitFor(() => {
		expect(screen.getByText('Задача 2')).toBeInTheDocument();
	});


	// Find checkboxes after both tasks are rendered
	const checkboxes = await screen.findAllByRole('checkbox');

	// Click both checkboxes
	await act(async () => { // Wrap multiple clicks in one act if they are part of a single user interaction flow
		await userEvent.click(checkboxes[0]);
		await userEvent.click(checkboxes[1]);
	});

	// Wait for the notifications to appear. Check that only one is present.
	// You might need to adjust the text depending on how your notifications are rendered.
	await waitFor(() => {
		const notifications = screen.queryAllByText(/завершена/i); // Use queryAllByText to get all matches
		expect(notifications).toHaveLength(1); // Expecting only one notification to be visible
	});
});