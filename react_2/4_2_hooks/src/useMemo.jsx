import React, { useMemo, useState } from 'react';

const ExpensiveBadComponent = React.memo(({ numbers, title }) => {
	console.log('Rendering ExpensiveComponent...');

	// Без useMemo сортировка выполняется при каждом ререндере
	const sortedNumbers = [...numbers].sort((a, b) => a - b);
	//Деструктуризация через [...] нужна, чтобы создать
	// копию массива и избежать побочных эффектов, связанных с изменением исходного массива.
	// Это особенно важно, когда работаем с "чистыми" функциями (pure functions),
	// которые не изменяют свои входные данные.
	return (
		<div>
			<h2>{title}</h2>
			<p>Sorted Numbers: {sortedNumbers.join(', ')}</p>
		</div>
	);
});

const ExpensiveGoodComponent = React.memo(({ numbers, title }) => {
	console.log('Rendering ExpensiveComponent...');

	// useMemo предотвращает пересчёт сортировки при ререндере
	const sortedNumbers = useMemo(() => {
		console.log('Sorting numbers...');
		return [...numbers].sort((a, b) => a - b);
	}, [numbers]);

	return (
		<div>
			<h2>{title}</h2>
			<p>Sorted Numbers: {sortedNumbers.join(', ')}</p>
		</div>
	);
});

function Parent() {
	const [count, setCount] = useState(0);

	// useMemo предотвращает изменение ссылки на numbers
	const numbers = useMemo(() => [3, 1, 4, 2], []);

	return (
		<div>
			{/* При каждом клике на кнопку title будет новым, вызвав ререндер */}
			<ExpensiveBadComponent numbers={numbers}
								   title={`Count: ${count}`} />
			<ExpensiveGoodComponent numbers={numbers}
									title={`Count: ${count}`} />
			<button onClick={() => setCount(count + 1)}>Increase</button>
		</div>
	);
}
