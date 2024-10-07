const goals = [8, 1, 1, 3, 2, -1, 5];
/* 1.
Самый результативный матч по количеству голов.
Выведите в модальном окне через alert()
сообщение «Самый результативный матч был под номером number.
В нем было забито numberOfGoals гол(ов).»
(замените number на порядковый номер матча,
а numberOfGoals — на количество голов в самом результативном матче).
Если самых результативных матчей несколько, то выведите первый из них.
* */
let numberOfGoals = 0;
goals.forEach(element => {
    if (numberOfGoals < element) numberOfGoals = element;
});
let number = goals.indexOf(numberOfGoals);
alert(`Самый результативный матч был под номером ${number}. \nВ нем было забито ${numberOfGoals} гол(ов).`);
/* 2.
Самые не результативные игры.
В массиве нужно найти все самые не результативные игры
(все матчи, у которых количество голов между собой совпадает и является минимальным).
В данном массиве goals это будут 2 матча под номерами 2 и 3 с количеством голов по 1.
Выведите через alert() сообщение
«Самые нерезультативные матчи были под номерами numbers.
В каждом из них было забито по numberOfGoals мячу(а).»
(замените numbers на порядковые номера матчей и отобразите их через запятую,
а numberOfGoals — на количество голов в самом не результативном матче).
Не берите в учет игры с автоматическим поражением.
*/
goals.forEach(element => {
    if (numberOfGoals > element && element > 0) numberOfGoals = element;
});
number = goals.map((element, index) => element === numberOfGoals ? index : -1).filter(element => element !== -1);
alert(`Самые нерезультативные матчи были под номерами ${number}.\nВ каждом из них было забито по ${numberOfGoals} мячу(а).`);

/* 3.
Общее количество голов за сезон. Не берите в учет игры с автоматическим поражением.
Выведите сообщение через alert() «Общее количество голов за сезон равно numberOfGoals»
(замените numberOfGoals на число общее количества голов за сезон).
*/
numberOfGoals = goals.filter(element => element > 0).reduce((acc, goal) => acc + goal, 0);
alert(`Общее количество голов за сезон равно ${numberOfGoals}`);

/* 4.
Были ли автоматические поражения.
Если были, то выведите сообщение через alert()
«Были автоматические поражения: да»,
иначе «Были автоматические поражения: нет».
 */
alert(goals.indexOf(-1)
    ? 'Были автоматические поражения: да'
    : 'Были автоматические поражения: нет');

/* 5.
Среднее количество голов за матч.
Выведите сообщение через alert() «Среднее количество голов за матч равно numberOfGoals»
(замените numberOfGoals на среднее количество голов за матч).
*/
let positiveMatches = goals.filter(element => element > 0);
positiveMatches.reduce((acc, goal) => acc + goal, 0);
let numberOfGoal = numberOfGoals / positiveMatches.length;
alert(`Среднее количество голов за матч равно ${numberOfGoal.toFixed(2)}`);

/* 6.
Отсортируйте голы в порядке возрастания и выведите все результаты через запятую в модальном окне alert().
Массив goals не должен быть изменен.
*/
let copyGoals = [...goals];
copyGoals = copyGoals.filter(element => element > 0).sort((a, b) => a - b);
alert(`new Array: ${copyGoals}\nold Array: ${goals}`);
