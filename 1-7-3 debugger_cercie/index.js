let messagePrompt = 'Введите температуру в градусах Цельсия';
let temperatureInCelsius = prompt(messagePrompt);
console.log(typeof temperatureInCelsius);

while (temperatureInCelsius === null || isNaN(Number(temperatureInCelsius))) {
    alert("Введите корректное число для температуры");
    temperatureInCelsius = prompt(messagePrompt);
}

if (Number(temperatureInCelsius) === 0) {
    alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (Number(temperatureInCelsius) > 0) {
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}
//debugger;
const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;

let message = `${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`;
console.log(message);
alert(message);