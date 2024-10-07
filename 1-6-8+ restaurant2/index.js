let messageName = 'Введите имя клиента';
let messageClientSpentToday = 'Сколько клиент потратил сегодня?';
let messageClientSpentForAllTime = 'Сколько клиент потратил за все время?';

let clientName = prompt(messageName);
let clientSpentTodayInput = prompt(messageClientSpentToday);
let clientSpentForAllTimeInput = prompt(messageClientSpentForAllTime);

const clientSpentToday = Number(clientSpentTodayInput);
let clientSpentForAllTime = Number(clientSpentForAllTimeInput);

if (isNaN(clientSpentToday) || isNaN(clientSpentForAllTime)) {
    alert(`Сумма, которую клиент потратил за все время 
           \nи которую потратил сегодня, должна быть числом!
           \nПерезагрузи страницу, чтобы повторить попытку.`);
} else {
    let discount = 0;
    const sumBeforeDiscount = clientSpentForAllTime + clientSpentToday;

    if (sumBeforeDiscount >= 100 && sumBeforeDiscount <= 300) discount = .1;
    else if (sumBeforeDiscount > 300 && sumBeforeDiscount <= 500) discount = .2;
    else if (sumBeforeDiscount > 500) discount = .3;

    const sumOfDiscount = clientSpentToday * discount;
    const sumOfPayment = clientSpentToday - sumOfDiscount;
    clientSpentForAllTime += sumOfPayment;

    console.log(`Вам предоставляется скидка в ${discount * 100}% в сумме ${sumOfDiscount.toFixed(2)}$!`);
    console.log(`Спасибо, ${clientName}! \nК оплате ${sumOfPayment.toFixed(2)}$.`);
    console.log(`За все время в нашем ресторане вы потратили ${clientSpentForAllTime.toFixed(2)}$.`);
}
