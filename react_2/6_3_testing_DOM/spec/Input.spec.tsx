import { render, screen, within } from '@testing-library/react';
import { Input } from '../src/components/Input';

describe('Поле ввода', () => {
	it.todo('Ограничение на ввод более 32 символов');

	it('Поле доступно для ввода', async () => {
		const fn = jest.fn();

		render(<Input value="Greetings!"
					  onChange={fn} />);

		const input1 = screen.getByRole('textbox');

		test('example', async () => {
			render(<Input value="Greetings!"
						  onChange={fn} />);

			// ✅ getByTestId — из screen (глобальный доступ к DOM после render)
			const input2 = screen.getByTestId('search-input');

			// ✅ queryByTestId
			const input3 = screen.queryByTestId('search-input');

			// ✅ findByTestId — нужно await
			const input4 = await screen.findByTestId('search-input');

			// ✅ queryAllByTestId
			const items = screen.queryAllByTestId('list-item');
		});
		const section = screen.getByTestId('form-section');
		const input = within(section).getByTestId('search-input');

	});
});
