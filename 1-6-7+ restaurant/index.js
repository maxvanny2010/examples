const clientName = 'Игорь';
let clientSpentForAllTime = 100;
let discount = 0;

const clientSpentToday = 25;
const sumBeforeDiscount = clientSpentForAllTime + clientSpentToday;

if(sumBeforeDiscount >= 100 && sumBeforeDiscount <= 300) discount = .1;
else if(sumBeforeDiscount > 300 && sumBeforeDiscount <= 500) discount = .2;
else if(sumBeforeDiscount > 500) discount = .3;

const sumOfDiscount = clientSpentToday * discount;
const sumOfPayment = clientSpentToday - sumOfDiscount;
clientSpentForAllTime += sumOfPayment;
console.log(`Вам предоставляется скидка в ${discount * 100}% в сумме ${sumOfDiscount}$!`);
console.log(`Спасибо, ${clientName}! \nК оплате ${sumOfPayment}$. 
\nЗа все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);