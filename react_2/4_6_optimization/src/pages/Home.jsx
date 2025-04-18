import { useEffect, useState, useTransition } from 'react';
import { Component, LoadingFallback } from '../component/admin/Component.jsx';
import ErrorBoundary from '../boundary/ErrorBoundary.jsx';


export function Home() {
	const [admin, setAdmin] = useState(false);
	const [isPending, startTransition] = useTransition();
	const [render, setRender] = useState([]);

	const generateComponent = () => {
		const componentNumber1 = Math.floor(Math.random() * 4) + 1;
		const componentNumber2 = Math.floor(Math.random() * 4) + 1;
		setRender([`Admin${componentNumber1}`, `Admin${componentNumber2}`]);
	};
	useEffect(() => {
		setTimeout(() => {
			generateComponent();
		}, 3000);
	}, []);
	const handleClick = async () => {
		const { sum } = await import(/*@vite-ignore*/'../lazy/sum.jsx');
		alert(sum(2, 2));
	};
	return (
		<>

			<h1>Home</h1>
			<button onClick={handleClick}>Plus 2+2
			</button>
			<button disabled={isPending}
					onClick={() =>
						startTransition(() => setAdmin(s => !s))}
			>
				Toggle Admin
			</button>
			{isPending && <LoadingFallback />}
			<ErrorBoundary>
				{admin ? <Component name="Admin" /> : <h2>Not Admin</h2>}
			</ErrorBoundary>
			{
				render.map((item, index) =>
					<ErrorBoundary key={index}>
						<Component name={item} />
					</ErrorBoundary>,
				)
			}

		</>
	);
}

export default Home;
