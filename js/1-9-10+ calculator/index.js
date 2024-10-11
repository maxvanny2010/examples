function getMathResult(expression) {
    let mistake = 'Ошибка';

    if (!expression || expression.length < 3) return mistake;
    if (!isFinite(expression[0]) || !isFinite(expression[expression.length - 1])) {
        return mistake;
    }
    let first = Number(expression[0]);
    let last = Number(expression[expression.length - 1]);

    let operands = ['>', '<', '=', '+', '-', '*', '/'];
    let operand = expression.find(element => operands.includes(element));
    if (!operand) return mistake;
    return getCalculateResult(first, last, operand[0]);
}

function getCalculateResult(x, y, operand) {
    let result = 'Oшибка';
    if (operand === '>') {
        result = x > y;
    } else if (operand === '<') {
        result = x < y;
    } else if (operand === '=') {
        result = x === y;
    } else if (operand === '+') {
        result = x + y;
    } else if (operand === '-') {
        result = x - y;
    } else if (operand === '/') {
        result = x / y;
    }
    return result;
}

console.log(getMathResult(['200', '+', 300])); // 500
console.log(getMathResult(['20', '-', '5'])); // 15
console.log(getMathResult([100, '/', 100])); // 1
console.log(getMathResult([2, '-', 2])); // 0
console.log(getMathResult(['5', '>', '10'])); // false
console.log(getMathResult(['5', '<', '10'])); // true
console.log(getMathResult(['1', '=', 1])); // true
console.log(getMathResult(['1', '**', 1])); // 'Ошибка'
console.log(getMathResult(['+', '100', 10])); // 'Ошибка'
console.log(getMathResult(['100', 'hello', 'javascript', 'help200', '+', 4])); // 104