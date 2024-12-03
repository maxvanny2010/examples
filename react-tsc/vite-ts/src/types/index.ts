export interface User {
	email: string;
	password: string;
	id: string;
}

export class UserDetails implements User {
	email: string;
	password: string;
	id: string;

	constructor(props: User) {
		this.email = props.email;
		this.password = props.password;
		this.id = props.id;
	}
}

export class UserDetails2 implements User {
	constructor(public email: string, public password: string, public id: string) {
	}
}

interface Person {
	name: string;
}

export interface Employee extends Person, User {
	salary?: number;
}

export type User2 = {
	name: string;
	email: string;
}
export type Address = {
	city: string;
}
export type Manager = User2 & {
	salary?: number;
} & Address;

export const manager: Manager = {
	name: 'Bob',
	salary: 100,
	city: 'Cork',
	email: 'bob@gmail.com',
};

export function identity<T = string>(args: T): T {
	return args;
}

identity<Person>({ name: 'bob' });
identity('bob');
identity(123);

export function identity2<T = string>(args: number): T {
	return args as T;
}

//identity2<Person>({ name: 'bob' });//error
//identity2('bob');//error
identity2(123);
