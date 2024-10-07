const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;
for (const number of numbers) {
    sum += number ** 3;
}
console.log(sum);

sum = 0;
numbers.forEach(number => sum += number ** 3)
console.log(sum);

sum = 0;
sum = numbers.reduce((acc, number) => acc += number ** 3, 0);
console.log(sum);