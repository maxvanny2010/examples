const ordersArr = [4, 2, 1, 3];
const people = [
    {id: 1, name: "Максим"},
    {id: 2, name: "Николай"},
    {id: 3, name: "Ангелина"},
    {id: 4, name: "Виталий"},
];

function giveTalonsInOrder(patient, orders) {
    return orders.map(order => patient.find(person => person.id === order));
}

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);