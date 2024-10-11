let userName = prompt('Как вас зовут?');
let userAge = prompt('Сколько вам лет?');
userName = userName.trim();
userName = userName !== '' ? userName.toLowerCase() : 'Вася';
userAge = userAge.trim();
userAge = Number(userAge);
userAge = !Number.isNaN(userAge) && userAge > 0 ? userAge : 0;
alert(`Вас зовут ${userName} и вам ${userAge} лет(года)`);
