import { ReactElement } from 'react';

export default function ProgrammingPage() {
	return <div>Programming Page</div>;
}

ProgrammingPage.getLayout = (page: ReactElement) => {
	return (
		<>
			<header className="bg-gray-800 text-white p-4">HEADER</header>
			<main className="p-4">{page}</main>
			<footer className="bg-gray-900 text-white p-4 mt-4">FOOTER</footer>
		</>
	);
};