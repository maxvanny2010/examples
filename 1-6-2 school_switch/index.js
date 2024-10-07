let correctAnswers = 0;
let incorrectAnswers = 0;
const correct = 'Ответ Верный';
const incorrect = 'Ответ Неверный';

const _twoPlusTwo = 4;
const _twoMultiplyTwo = 4;
const _applePetya = 1;
const _candyMasha = 12;
const _twoPlusTwoAndMultiplyTwo = 6;

const twoPlusTwo = Number(prompt('Сколько будет 2 + 2?'));
correctAnswer(twoPlusTwo, _twoPlusTwo);

const twoMultiplyTwo = Number(prompt('Сколько будет 2 * 2?'));
correctAnswer(twoMultiplyTwo, _twoMultiplyTwo);

const applePetya = Number(prompt(`У Пети было 5 яблок. 
                                 \n3 из них он съел, 1 отдал другу. 
                                 \nСколько яблок у Пети осталось?`));
correctAnswer(applePetya, _applePetya);
const candyMasha = Number(prompt(`У Маши было 10 конфет. 
                                \n2 она съела, 1 отдала другу. 
                                \nПосле мама дала Маше еще 5 конфет. 
                                \nСколько в итоге конфет осталось у Маши?`)
);
correctAnswer(candyMasha, _candyMasha);
const twoPlusTwoAndMultiplyTwo = Number(prompt('Сколько будет 2 + 2 * 2?'));
correctAnswer(twoPlusTwoAndMultiplyTwo, _twoPlusTwoAndMultiplyTwo);

alert(`Конец теста! \nПравильные ответы — ${correctAnswers}; 
                    \nНеправильные ответы — ${incorrectAnswers}.`);

function correctAnswer(param1, param2) {
    let result = incorrect;
    if (param1 === param2) {
        correctAnswers++;
        result = correct;
    } else incorrectAnswers++;

    alert(result);
}
