const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
}

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
}

function makeDomestic(isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return {name: this.name, type: this.type, makeSound: this.makeSound(), isDomestics: isDomestic};
}

makeDomestic.bind(dog, true)();
//console.log(charly());
// Выведет сообщение: "Собака по имени Чарли говорит Гав-Гав"
// Вернет объект: {name: 'Чарли', type: 'Собака', isDomestic: true, makeSound: ƒ}

makeDomestic.call(bird, false);
//console.log(petya);
// Выведет сообщение: "Воробей по имени Петя говорит Чик-чирик"
// Вернет объект: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}
makeDomestic.apply(bird, [false]);
//console.log(newPetya);
// Выведет сообщение: "Воробей по имени Петя говорит Чик-чирик"
// Вернет объект: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}