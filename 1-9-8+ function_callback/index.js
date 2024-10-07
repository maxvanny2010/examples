function showSuccessMessage(message) {
    console.log(message);
}
function showErrorMessage(message) {
    console.error(message);
}
function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
    const indices = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i] === errorSymbol) indices.push(i);
    }
    /*index.length === 0
        ?  successCallback('В данном тексте нет запрещенных символов')
        :  errorCallback(`Найден запрещенный символ ${errorSymbol} под индексом(и) ${index}`);*/
    if (indices.length === 0) successCallback('В данном тексте нет запрещенных символов')
    else indices.forEach(index=> errorCallback(`Найден запрещенный символ ${errorSymbol} под индексом ${index}`));
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);