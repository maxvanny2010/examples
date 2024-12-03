import { ReactNode } from 'react';
import { User } from '../../types';

interface CounterProps {
	name: string;
	id: number | string;
	attributes?: string;
	children?: ReactNode;
	user: User | null;
}

export function Counter({ id, name, attributes, children, user }: CounterProps) {
//	const sum = attributes + 1;
	return (
		<div>
			<h1>Counter {id}</h1>
			<p>{user?.email}</p>
			<p data-id={attributes}>{name}</p>
			{children}
		</div>


	);
}