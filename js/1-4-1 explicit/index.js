// NaN true 'Maxim'
const name = 'Maxim';
console.log(Number(name), Boolean(name), String(name));
// 20 true '20'
const age = 20;
console.log(Number(age), Boolean(age), String(age));
// 25 true '25'
const countMoney = 25n;
console.log(Number(countMoney), Boolean(countMoney), String(countMoney));
// 0 false 'false'
const isProgrammer = false;
console.log(Number(isProgrammer), Boolean(isProgrammer), String(isProgrammer));
// true 'Symbol(id)'
const personId = Symbol("id");
console.log(/*Number(personId),*/ Boolean(personId), String(personId));
// NaN true '[object Object]'
// 123 true '123'
const person = {
    [personId]: 123
}
console.log(Number(person), Boolean(person), String(person));
console.log(Number(person[personId]), Boolean(person[personId]), String(person[personId]));
// 0 false 'false'
const citizenship = null;
console.log(Number(citizenship), Boolean(citizenship), String(citizenship));
// NaN false 'undefined'
const timeForTask = undefined;
console.log(Number(timeForTask), Boolean(timeForTask), String(timeForTask));
         
