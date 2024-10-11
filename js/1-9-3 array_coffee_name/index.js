const coffees = ['Latte', 'Cappuccino', 'Americano'];

let coffeeName = prompt('Поиск кофе по названию:');
while (coffeeName === null || coffeeName.trim() === '') {
    alert(`Напишите марку кофейного напитка.`);
    coffeeName = prompt('Поиск кофе по названию:');
}
coffeeName = coffeeName.trim().toLocaleLowerCase();
let coffee = coffees.find(element => element.toLocaleLowerCase() === coffeeName);
if (coffee) {
    let number = coffees.findIndex(element => element.toLocaleLowerCase() === coffeeName);
    alert(`Держите ваш любимый кофе ${coffee}. \nОн ${number + 1}-й по популярности в нашей кофейне.`);
} else alert(`К сожалению, такого вида кофе нет в наличии.`);
