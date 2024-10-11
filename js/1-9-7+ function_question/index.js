let checkQuestionAnswer = (question, correctAnswer) => {
    const valid = 'Ответ верный';
    const invalid = 'Ответ неверный';
    let answer = prompt(question);
    while (!answer) {
        alert(invalid);
        answer = prompt(question);
    }
    answer = answer.trim().toLocaleLowerCase();
    alert(correctAnswer.toLocaleLowerCase() === answer ? valid : invalid);

}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');