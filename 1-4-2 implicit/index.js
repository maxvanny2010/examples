console.log(Number('10'), typeof Number('10')); // expicit
//1
console.log('**********'+ 1 +'***************');
console.log(+'50', typeof(+'50'));// implicit
console.log(Number('50'),  typeof Number('50'));// explicit
//2
console.log('**********'+ 2 +'***************');
console.log(Number('100'), typeof Number('100')); // expicit
//3
console.log('**********'+ 3 +'***************');
console.log('' + 1, typeof('' + 1)); // implicit
console.log(String(1), typeof String(1)); // explicit
//4
console.log('**********'+ 4 +'***************');
console.log(String(1), typeof String(1)); // expicit
//5
console.log('**********'+ 5 +'***************');
console.log(Boolean(0), typeof Boolean(0)); // expicit
//6
console.log('**********'+ 6 +'***************');
console.log(+'001', typeof(+'001'));// implicit
console.log(Number('001'), typeof Number('001')); // explicit 1
//7
console.log('**********'+ 7 +'***************');
console.log(1 + '', typeof(1 + '')); // implicit
console.log(String(1), typeof String(1)); // explicit
//8
console.log('**********'+ 8 +'***************');
console.log(Boolean(1), typeof Boolean(1)); // expicit true
//9
console.log('**********'+ 9 +'***************');
console.log(String(001), typeof String(001)); // expicit '1'
//10
console.log('**********'+ 10 +'***************');
console.log(Number('Hello World'), typeof Number('Hello World')); // expicit NaN