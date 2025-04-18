import { lazy, Suspense, useState, useTransition } from 'react';

const Admin = lazy(() => import('../component/Admin.jsx'));

export function Home() {
	const [admin, setAdmin] = useState(false);
	const [isPending, startTransition] = useTransition();

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
			{isPending && <p>isLoading...</p>}
			<Suspense>
				{admin ? <Admin /> : <h2>Not Admin</h2>}
			</Suspense>
		</>
	);
}

export default Home;
