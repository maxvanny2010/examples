let existingUserLogin = 'the_best_user';
let existingUserPassword = '12345678';
let userLogin = prompt('Введите логин');
let userPassword = prompt('Введите пароль');

userLogin = userLogin.trim();
userPassword = userPassword.trim();

let miss = 'miss data';
userLogin = existingUserLogin === userLogin ? userLogin : miss;
userPassword = existingUserPassword === userPassword ? userPassword : miss;

let result = (userLogin === miss || userPassword === miss)
    ? `Логин и (или) Пароль введены неверно!`
    : `«Добро пожаловать, ${userLogin}!»`;

alert(result);