const answer = true;
const confirmAnswer = "Верно";

const _1995 = 'JavaScript появился в 1995';
const _ECMAScript = 'Спецификация JavaScript называется ECMAScript';
const _oneMonthDeveloped = 'JavaScript был создан за 1 месяц';

let is1995 = confirm(`${_1995}?`);
alert(is1995 ? confirmAnswer : _1995);

let isECMAScript = confirm(`${_ECMAScript}?`);
alert(isECMAScript ? confirmAnswer : _ECMAScript);

let isOneMonthDeveloped = confirm(`${_oneMonthDeveloped}?`);
alert(isOneMonthDeveloped ? confirmAnswer : _oneMonthDeveloped);


