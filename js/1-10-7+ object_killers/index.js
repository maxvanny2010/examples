function getKiller(suspectInfo, deadPeople) {
    let killers = [];
    for (const [suspend, seenPeople] of Object.entries(suspectInfo)) {
        if (deadPeople.every(dead => seenPeople.includes(dead)))
            killers.push(suspend);
    }
    return `Killers: ${killers.length > 0 ? killers : ' no person suspect'}`;
}

console.log(
    getKiller(
        {
            James: ["Jacob", "Bill", "Lucas"],
            Johnny: ["David", "Kyle", "Lucas"],
            Coca: ["Jacob", "Bill", "Lucas"],
            Peter: ["Lucy", "Kyle"]
        },
        ["Lucas", "Bill"]
    )
); // Убийца James, Coca

console.log(
    getKiller(
        {
            Brad: [],
            Megan: ["Ben", "Kevin"],
            Finn: []
        },
        ["Ben"]
    )
); // Убийца Megan