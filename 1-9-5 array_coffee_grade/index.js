const clientsEstimations = [];

function askClientToGiveEstimation() {
    let answer = prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
    let number = Number(answer);
    if (!isNaN(number) && number >= 1 && number <= 10) clientsEstimations.push(number);
    else alert('Введите число от 1 до 10.');
}

while(clientsEstimations.length !== 5) {
    askClientToGiveEstimation();
}
let expectedGrade = 5
let goodEstimations = clientsEstimations.filter(grade => grade > expectedGrade).length;
let notGoodEstimations = clientsEstimations.filter(grade => grade <= expectedGrade).length;
console.log(`Всего положительных оценок: ${goodEstimations}. \nВсего отрицательных оценок: ${notGoodEstimations}`);