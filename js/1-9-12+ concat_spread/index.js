const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let flatConcat = matrix.reduce((a, b) => a.concat(b));
let flatSpread = matrix.reduce((a, b) => [...a, ...b]);
console.log(flatConcat);
console.log(flatSpread);