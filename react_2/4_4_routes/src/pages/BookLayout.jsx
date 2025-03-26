import { Outlet, useSearchParams } from 'react-router-dom';
import { BookList } from './BookList.jsx';

export function BookLayout() {
	const [searchParams, setSearchParams] = useSearchParams();

	// Извлечение параметров с значениями по умолчанию
	const value = Number(searchParams.get('n')) || 3;
	const category = searchParams.get('category') || 'all';

	console.log('###: value', value);
	console.log('###: category', category);

	// Обновление параметров в URL
	const updateSearchParams = (newParams) => {
		const updatedParams = {
			n: searchParams.get('n') || 3,
			category: searchParams.get('category') || 'all',
			...newParams,
		};
		setSearchParams(updatedParams);
	};

	return (
		<>
			<div className="block">
				<h1>Book Layout</h1>
			</div>
			<div className="block">
				<BookList value={value}
						  category={category} />
			</div>
			<div className="block">
				<Outlet context={{ name: 'React' }} />
			</div>
			<input
				type="number"
				value={value}
				onChange={(e) => updateSearchParams({ n: e.target.value })}
				placeholder="Enter number"
			/>
			<input
				type="text"
				value={category}
				onChange={(e) => updateSearchParams({ category: e.target.value })}
				placeholder="Enter category"
			/>
		</>
	);
}
