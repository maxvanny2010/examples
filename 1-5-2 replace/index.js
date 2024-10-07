const myName = 'Максим';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Result University';
const reasonText = 'это интересно';
const numberOfMonth = 0;

let myInfoText = `
Всем привет! Меня зовут ${myName}. \nСейчас я изучаю язык программирования ${programmingLanguage}, \nна курсе по ${programmingLanguage} у ${courseCreatorName}. \nЯ хочу стать веб-разработчиком, потому что ${reasonText}. \nДо этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а).\nЯ уверен(а), что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll("JavaScript", "javascript");
myInfoText = myInfoText.replace("курс", "КУРС");
console.log(myInfoText);
console.log(`length myInfoText: ${myInfoText.length}`);
console.log(`first char: ${myInfoText[1]}`);
console.log(`last char: ${myInfoText[myInfoText.length - 1]}`);
