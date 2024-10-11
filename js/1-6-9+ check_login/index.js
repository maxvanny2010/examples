let password = prompt("Введите пароль");

let isString = password !== null && password.trim() !== "";
let isLength = false;
let hasOneNumber = false;
let isUpperCase = false;
if (isString) {
    let lengthPassword = password.length;
    isLength = lengthPassword >= 3 && lengthPassword <= 30;
    for (let i = 0; i < lengthPassword; i++) {
        if (!isNaN(Number(password[i]))) {
            hasOneNumber = true;
        }
        if (isNaN(password[i]) && password[i] === password[i].toUpperCase()) {
            isUpperCase = true;
        }
    }
}
let valid = "Пароль валидный. Добро пожаловать в аккаунт";
let invalid =
    "Пароль не удовлетворяет условиям! \nПерезагрузите страницу и попробуйте ввести его еще раз.";
alert(isLength && hasOneNumber && isUpperCase ? valid : invalid);
