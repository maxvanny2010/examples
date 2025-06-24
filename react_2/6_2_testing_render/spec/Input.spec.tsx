import { prettyDOM, render } from '@testing-library/react';
import { Input } from '../src/components/Input';

describe('Поле ввода', () => {
	it.todo('Ограничение на ввод более 32 символов');

	it('Поле доступно для ввода', () => {
		const fn = jest.fn();
		const span = document.createElement('span');

		const { asFragment, rerender } = render(
			<Input value="Greetings!"
				   onChange={fn} />,
			{
				container: document.body.appendChild(span),
				hydrate: false,
				legacyRoot: false,
			},
		);
		const firstRender = asFragment();
		expect(firstRender).toMatchSnapshot();

		console.log(prettyDOM(firstRender.firstElementChild || undefined));
		rerender(<Input value="Greetings!"
						onChange={fn} />);
		console.log(prettyDOM(firstRender.firstElementChild || undefined));
	});
});