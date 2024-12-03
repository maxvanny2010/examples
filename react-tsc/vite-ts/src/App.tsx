import { FormEvent, MouseEvent, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Counter } from './components';
import { useUser } from './context';

function App() {
	const [count, setCount] = useState(0);
	const { user, createUser } = useUser();

	function handleClickCount(event: MouseEvent<HTMLButtonElement>) {
		console.log(event.screenX);
		createUser({
			email: 'bob@bob.com',
			password: '123',
			id: '123',
		});
		setCount((count) => count + 1);
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log(event.timeStamp);
	}

	return (
		<>
			<Counter id="123"
					 name="Some counter"
					 user={user}
			>
				<div>React</div>
			</Counter>
			<input type="text"
				   onChange={event => console.log(event)} />
			<form action="#"
				  onSubmit={handleSubmit}></form>
			<div>
				<a href="https://vite.dev"
				   target="_blank">
					<img src={viteLogo}
						 className="logo"
						 alt="Vite logo" />
				</a>
				<a href="https://react.dev"
				   target="_blank">
					<img src={reactLogo}
						 className="logo react"
						 alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={(event) =>
					handleClickCount(event)}>
					count is {count}
				</button>
				<button onClick={(event) =>
					console.log(event)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
