/**
 * Function return sum of two numbers.
 * @param {number} a - first number.
 * @param {number} b - second number.
 * @returns {number}
 */
export function sum(a, b) {
	return a + b;
}

/**
 * @typedef {Object} User
 * @property{string } name a name of user
 * @property{number } age an age of user
 * @property{'male'|'female' } [sex]  a sex of user
 */
/**
 * Function for creating a new user.
 * @param {string}name - a name of user
 * @param {number}age - an age of user
 * @returns {User} a new user
 */
export function createUser(name, age) {
	return { name, age, sex: 'male' };
}

/**
 * to get the array of numbers.
 * @returns {number[]}
 */
export function getNumbers() {
	return [1, 2, 3, 4, 'max'];
}

/**
 * to get the array of numbers.
 * @returns {User[]}
 */
export function getUsers() {
	return [{ name: 'Bob', age: 30 }, { name: 'Alice', age: 30 }, { name: 'Jan', age: 30 }];
}

/**
 * @typedef {Object} Person
 * @property{string } name a name of person
 * @property{number } age an age of person
 * @property{'male'|'female' } sex  a sex of person
 */
/**
 * to get the array of persons.
 * @returns {Person[]}
 */
export function getPersons() {
	return [{ name: 'Bob', age: 30, sex: 'male' }, { name: 'Alice', age: 30, sex: 'female' }];
}

/**
 * to get async data of user.
 * @param {number} userId - ID user.
 * @returns {Promise<User>}
 * @example getUserData(1).then(user => console.log(user));
 */
export function getUseData(userId) {
	return new Promise((resolve) => {
		console.log(userId);
		setTimeout(() => resolve({ name: 'Max' }), 1000);
	});
}