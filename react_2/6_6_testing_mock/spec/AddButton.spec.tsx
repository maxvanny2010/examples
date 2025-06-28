import { render, screen } from '@testing-library/react';
import { AddButton } from 'src/components/AddButton';
import { userEvent } from '@testing-library/user-event/setup/index';

describe('Кнопка "Добавить"', () => {

	it.todo('Блокировка для строки больше 32 символов');
	it.todo('Блокировка для строки меньше 1 символа');

	it('Проверка кликов по кнопке', async () => {
		const fn = jest.fn();
		render(<AddButton onClick={fn} />);
		const button = screen.getByText(/добавить/i);
		userEvent.click(button);
		expect(fn).toBeCalledTimes(1);
	});
});
