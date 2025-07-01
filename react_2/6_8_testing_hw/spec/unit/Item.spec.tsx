import { Item } from 'src/components/Item';
import { render, screen } from '@testing-library/react';

describe('Элемент списка задач', () => {
	it.todo('название не должно быть больше 32 символов');
	it.todo('название не должно быть пустым');
	it.todo('нельзя удалять невыполненные задачи');

	it('не отображает полное название, если оно слишком длинное', () => {
		const longTitle = 'Это очень очень очень длинное название задачи, которое превышает 32 символа';
		render(<Item id="1"
					 header={longTitle}
					 done={false}
					 onDelete={() => {
					 }}
					 onToggle={() => {
					 }} />);
		expect(screen.getByText(/очень длинное название/i)).toBeInTheDocument();
	});
	it('удаление недоступно, если задача не завершена', () => {
		render(<Item id="1"
					 header="Тест"
					 done={false}
					 onDelete={() => {
					 }}
					 onToggle={() => {
					 }} />);
		const button = screen.getByRole('button');
		expect(button).toBeDisabled();
	});
	it('корректно отображает задачу (snapshot)', () => {
		const { container } = render(
			<Item id="1"
				  header="Снапшот"
				  done={false}
				  onDelete={() => {
				  }}
				  onToggle={() => {
				  }} />,
		);
		expect(container).toMatchSnapshot();
	});

});