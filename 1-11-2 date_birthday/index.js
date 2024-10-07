function convertMsToDays(milliseconds) {
    const msInOneDay = 1000 * 60 * 60 * 24;
    return Math.round(milliseconds / msInOneDay);
}

function getDaysBeforeBirthday(nextBirthdayDate) {
    if (!(nextBirthdayDate instanceof Date) || isNaN(nextBirthdayDate.getTime())) return null;
    let diffMills = nextBirthdayDate.getTime() - Date.now();
    let countDay = convertMsToDays(diffMills);
    console.log(countDay);
}

getDaysBeforeBirthday(new Date(2024, 9, 27));