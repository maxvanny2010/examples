function addDays(date, days) {
    if (!(date instanceof Date) || isNaN(date.getTime())) return 'Error';
    let mills = days * 24 * 60 * 60 * 1000;
    let newDateInMills = date.getTime() + mills;
    return new Date(newDateInMills);
}

console.log(addDays(new Date(), 3));