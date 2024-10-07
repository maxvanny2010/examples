const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
let randomIndex = Math.floor(Math.random() * peopleWaiting.length);
console.log(`The last person who take a parcel: ${peopleWaiting[randomIndex]} -> INDEX:${randomIndex}\n`);
let count = 0;
while (peopleWaiting.length !== 0) {
    if (count <= randomIndex) {
        giveParcel();
        count++;
    } else leaveQueueWithoutParcel();
}

function giveParcel() {
    let personGotParsel = peopleWaiting.shift();
    console.log(`${personGotParsel} получил(а) посылку,`);
    displayLengthOfQueue(peopleWaiting.length);
}

function leaveQueueWithoutParcel() {
    let personLeavedQueue =  peopleWaiting.pop();
    console.log(`${personLeavedQueue} не получил(а) посылку и ушел(ла) из очереди`);
    displayLengthOfQueue(peopleWaiting.length);

}

function displayLengthOfQueue(length){
    console.log(`в очереди осталось ${length} человек.`);
}