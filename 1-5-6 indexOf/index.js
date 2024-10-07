let userText = prompt('Введите текст');
let wordFromText = prompt('Ведите слово из текста');

userText = userText.trim().toLowerCase();
wordFromText = wordFromText.trim().toLowerCase();

let indexOfWord = userText.indexOf(wordFromText);

let string = userText.slice( 0, (indexOfWord !== -1)? indexOfWord: userText.length);
console.log(`Результат: ${string}`);
