function getDateFormat(date, separator = ".") {
    let error = 'Enter correct date';
    if (!(date instanceof Date) || isNaN(date.getTime())) return error;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dayString = day.toString();
    let monthString = month.toString();
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    console.log(`${day}${separator}${month}${separator}${year}`);

}

getDateFormat(new Date(), '-');