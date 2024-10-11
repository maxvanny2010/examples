let getSumOfSequence = (number) => {
    const array = [];
    for (let i = 1; i <= number; i++) {
        array.push(i);
    }
    return array[0] + array.at(array.length - 1);
};

console.log(getSumOfSequence(5));