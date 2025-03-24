import { Outlet } from 'react-router-dom';
import { BookList } from './BookList.jsx';

export function BookLayout() {
	console.log('Rendering BookLayout');
	return (
		<>
			<div className="block"><h1>Book Layout</h1></div>
			<div className="block">
				<BookList />
			</div>
			<div className="block">
				<Outlet context={{ name: 'React' }} />
			</div>
		</>
	);
}
