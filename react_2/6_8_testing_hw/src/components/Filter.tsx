type Props = {
	currentFilter: 'all' | 'active' | 'completed';
	onChange: (filter: 'all' | 'active' | 'completed') => void;
};

export const Filter = ({ currentFilter, onChange }: Props) => {
	return (
		<div style={{ marginTop: '1rem' }}>
			<button
				onClick={() => onChange('all')}
				disabled={currentFilter === 'all'}
			>
				Все
			</button>
			<button
				onClick={() => onChange('active')}
				disabled={currentFilter === 'active'}
			>
				Активные
			</button>
			<button
				onClick={() => onChange('completed')}
				disabled={currentFilter === 'completed'}
			>
				Выполненные
			</button>
		</div>
	);
};
