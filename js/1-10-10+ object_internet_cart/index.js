const groceries = {
    "73Wakv": {
        name: "Orange Juice",
        price: 1.5,
        discount: 10
    },
    "5L3db9": {
        name: "Chocolate",
        price: 2,
        discount: 0
    }
    // more items...
};

function getTotalPriceOfShoppingBag(shoppingBagArray) {
    let totalPrice = 0;
    for (const element of shoppingBagArray) {
        let id = element.productId;
        if (id in groceries) {
            const {price, discount} = groceries[id];
            let count = element.count;
            totalPrice += count * price * (1 - discount / 100);
        }
    }
    return totalPrice.toFixed(2);
}

const shoppingBag = [
    {productId: "73Wakv", count: 3},
    {productId: "5L3db9", count: 23}
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); // Возвращает 50.05