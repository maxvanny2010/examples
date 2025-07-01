import { App } from 'src/App';
import { act, render, screen, waitFor } from '@testing-library/react';
import ue from '@testing-library/user-event';
import { JestStoreProvider } from '../utils/JestStoreProvider';
import { AppInner } from 'src/AppInner';

const userEvent = ue.setup({
	advanceTimers: jest.advanceTimersByTime,
});

let localStorageMock: { [key: string]: string } = {};

Object.defineProperty(window, 'localStorage', {
	value: {
		getItem: jest.fn((key: string) => localStorageMock[key] || null),
		setItem: jest.fn((key: string, value: string) => {
			localStorageMock[key] = value;
		}),
		removeItem: jest.fn((key: string) => {
			delete localStorageMock[key];
		}),
		clear: jest.fn(() => {
			localStorageMock = {};
		}),
		length: jest.fn(() => Object.keys(localStorageMock).length),
		key: jest.fn((index: number) => Object.keys(localStorageMock)[index] || null),
	},
	writable: true,
});

beforeEach(() => {
	localStorageMock = {};
	window.localStorage.clear();
	jest.clearAllMocks();
});

it('Хранение стора в localStorage', async () => {
	render(
		<JestStoreProvider>
			<App />
		</JestStoreProvider>,
	);

	const inputEl = screen.getByRole('textbox');
	const addBtnEl = screen.getByAltText(/Добавить/i);

	await act(async () => {
		await userEvent.clear(inputEl);
		await userEvent.type(inputEl, 'Первая задача для localStorage');
		await userEvent.click(addBtnEl);
	});

	await waitFor(() => {
		expect(screen.getByText('Первая задача для localStorage')).toBeInTheDocument();
	});

	expect(localStorage.setItem).toHaveBeenCalledWith(
		'state',
		expect.any(String),
	);

	const storedState = JSON.parse(localStorage.getItem('state') || '{}');

	expect(storedState.taskList.list.length).toBe(1);
	expect(storedState.taskList.list[0].header).toBe('Первая задача для localStorage');
	expect(storedState.taskList.list[0].done).toBe(false);

});

it('Добавление задач в список', async () => {
	render(
		<JestStoreProvider>
			<AppInner />
		</JestStoreProvider>,
	);

	const inputEl = screen.getByRole('textbox');
	const addBtnEl = screen.getByAltText(/Добавить/i);

	await act(async () => {
		await userEvent.clear(inputEl);
		await userEvent.type(inputEl, 'Первый заголовок');
		await userEvent.click(addBtnEl);
	});

	await waitFor(() => {
		expect(screen.getByText('Первый заголовок')).toBeInTheDocument();
	});

	await act(async () => {
		await userEvent.clear(inputEl);
		await userEvent.type(inputEl, 'Второй заголовок');
		await userEvent.click(addBtnEl);
	});

	await waitFor(() => {
		expect(screen.getByText('Второй заголовок')).toBeInTheDocument();
	});

	const items = screen.getAllByRole('listitem');
	expect(items).toHaveLength(2);
});
