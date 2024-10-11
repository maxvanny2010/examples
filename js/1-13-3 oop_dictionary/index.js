class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        if (!this.words[word]) this.words[word] = {word, description};
    }

    remove(word) {
        delete this.words[word];
    }

    get(word) {
        return this.words[word] ? `${this.words[word].word}-${this.words[word].description}` : 'Слово не найдено';
    }

    showAllWords() {
        for (const {word, description} of Object.values(this.words)) {
            console.log(`${word} - ${description}`);
        }
    }

}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('JavaScript', 'НЕпопулярный язык программирования');
console.log(dictionary.get('JavaScript'));
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.add('Пет-разработчик', 'Человек, который создает пет проекты и сайты или поддерживает и дополняет существующие');
dictionary.remove('JavaScript');
console.log(dictionary);
dictionary.showAllWords();