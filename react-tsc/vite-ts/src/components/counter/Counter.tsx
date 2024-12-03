import { ReactNode } from 'react';

interface CounterProps {
	name: string;
	id: number | string;
	attributes?: string;
	children: ReactNode;
}

export function Counter({ id, name, attributes, children }: CounterProps) {
//	const sum = attributes + 1;
	return (
		<div>
			<h1>Counter {id}</h1>
			<p>{name}</p>
			<p data-id={attributes}>{name}</p>
			{children}
		</div>


	);
}