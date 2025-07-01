import { act, render, screen, waitFor } from '@testing-library/react';
import { NewTaskBar } from 'src/modules/NewTaskBar';
import ue from '@testing-library/user-event';
import { JestStoreProvider } from '../utils/JestStoreProvider';
import * as taskSliceModule from 'src/store/taskSlice';

const userEvent = ue.setup({
	advanceTimers: jest.advanceTimersByTime,
});

it.each([
	['Длинный неподходящий заголовок тут', true, true],
	['Хороший заголовок', false, false],
	['', true, false],
])('Создание задачи', async (text, isDisabled, isHinted) => {
	render(<NewTaskBar />, {
		wrapper: JestStoreProvider,
	});

	const inputEl = screen.getByRole('textbox');
	const hintEl = screen.getByTestId('input-hint-text');
	const addBtnEl = screen.getByRole('button');

	// This is the primary culprit from the new stack trace.
	// Wrap the typing action in `act`.
	await act(async () => {
		await userEvent.clear(inputEl);
		if (text) {
			await userEvent.type(inputEl, text);
		}
	});

	await waitFor(() => {
		expect(inputEl).toHaveValue(text);
		if (isDisabled) {
			expect(addBtnEl).toBeDisabled();
		} else {
			expect(addBtnEl).not.toBeDisabled();
		}
		expect(hintEl.innerHTML.length > 0).toBe(isHinted);
	});
});

it('Не больше 10 новых задач', async () => {
	jest.spyOn(taskSliceModule, 'uncompleteCount').mockReturnValue(10);

	render(<NewTaskBar />, {
		wrapper: JestStoreProvider,
	});

	const inputEl = screen.getByRole('textbox');
	const addBtnEl = screen.getByRole('button');

	expect(inputEl).toBeDisabled();
	expect(addBtnEl).toBeDisabled();
});

// This test is already good because the click and its subsequent state updates are correctly wrapped.
it('Добавление задачи сбрасывает инпут', async () => {
	render(<NewTaskBar />, { wrapper: JestStoreProvider });

	const inputEl = screen.getByRole('textbox');
	const addBtnEl = screen.getByRole('button');

	await userEvent.type(inputEl, 'Задача'); // This still needs to be wrapped!

	// Let's modify this one to be fully wrapped for safety.
	await act(async () => {
		await userEvent.type(inputEl, 'Задача'); // Ensure typing is also within act if it causes warnings
		await userEvent.click(addBtnEl);
	});

	await waitFor(() => {
		expect(inputEl).toHaveValue('');
	});
});