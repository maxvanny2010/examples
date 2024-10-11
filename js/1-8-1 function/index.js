let nameFunction = `A name of function:`;

function getName1(name) {
    return `${nameFunction} ${name}`;
}

let getName2 = function (name) {
    return `${nameFunction} ${name}`
};
let getName3 = (name) => `${nameFunction} ${name}`;
console.log(getName1("Function Declaration"));
console.log(getName2("Function Expression"));
console.log(getName3("Arrow Function Expression"));