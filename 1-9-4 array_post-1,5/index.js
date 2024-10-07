const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
const updatedPrices = prices.map(element => element * 1.5);

coffees.forEach((coffee, index) => {
    alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`)
});