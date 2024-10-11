function getWinner(applicants, winnerObject) {
    let gamers = Object.keys(applicants);
    let length = gamers.length;
    let random = getRandomNumberInRange(0, length);
    return {...winnerObject, ...applicants[gamers[random]]};
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const todaysWinner = {
    prize: '10 000$',
}

const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
}

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner);
// { prize: '10 000$', name: 'Максим', age: 25 }