const name = 'Maxim';
const age = 20;
const countMoney = 20n;
const isProgrammer = false;
const personId = Symbol("id");
const person = {
    [personId]: 123
}
const citizenship = null;
const timeForTask = undefined;

console.log('time for the task', timeForTask, typeof timeForTask);
console.log('citizenship', citizenship, typeof citizenship);
console.log('symbol', personId, typeof personId);
console.log('object person', person, typeof person);
console.log('to get hidden field', person[personId], typeof person[personId]);
console.log('hidden field', Object.keys(person), typeof Object.keys(person));
console.log('is programmer', isProgrammer, typeof isProgrammer);
console.log('name', name, typeof name);
console.log('age', age, typeof age);
console.log('count money', countMoney, typeof countMoney);
