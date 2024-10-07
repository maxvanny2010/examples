class CustomSelect {
    #id;
    #options;
    #selector;
    #container;
    #classButton;
    #classSpan;
    #classListUL;
    #classItemLI;
    #classBlock;
    #currentSelectedOption;

    constructor(id, options) {
        this.#id = id;
        this.#options = options;
        this.#selector = 'select-dropdown';
        this.#container = document.querySelector('#container');
        this.#classBlock = `select-dropdown select-dropdown--${this.#id}`;
        this.#classItemLI = `select-dropdown__list-item`;
        this.#classSpan = `select-dropdown__text select-dropdown__text--${this.#id}`;
        this.#classListUL = `select-dropdown__list select-dropdown__list--${this.#id}`;
        this.#classButton = `select-dropdown__button select-dropdown__button--${this.#id}`;
        this.#currentSelectedOption = 0;
    }

    get selectedValue() {
        return this.#currentSelectedOption;
    }

    set selectedValue(value) {
        this.#currentSelectedOption = value;
    }

    get container() {
        return this.#container;
    }

    get classButton() {
        return this.#classButton;
    }

    get classSpan() {
        return this.#classSpan;
    }

    get classListUL() {
        return this.#classListUL;
    }

    get classItemLI() {
        return this.#classItemLI;
    }

    #getSelector(selector) {
        return this.container.querySelector(selector);
    }

    render(selectBlock) {
        this.#createSelect(selectBlock);
    }

    #createElement(element) {
        return document.createElement(element);
    }

    #createSelect(selectBlock) {
        const ul = this.#createElement('ul');
        ul.className = this.classListUL;
        this.#options.forEach(({text, value}) => {
            const li = this.#createElement('li');
            li.textContent = text;
            li.className = this.classItemLI;
            li.setAttribute('data-value', value);
            //li.addEventListener('click', (event) => this.#selectOption(event))
            ul.appendChild(li);
        });
        const span = this.#createElement('span');
        span.className = this.classSpan;
        span.textContent = 'Сделайте выбор:';

        const chevron = this.#createElement('i');
        chevron.className = 'mdi mdi-chevron-down';

        const button = this.#createElement('button');
        button.className = this.classButton;

        const block = this.#createElement('div');
        block.className = this.#classBlock;

        ul.addEventListener('click', event => this.#selectOption(event));


        button.append(span, chevron);
        block.append(button, ul);

        button.addEventListener('click', () => this.#toggleOptions(ul))
        selectBlock.appendChild(block);
    }

    /* open/close the select box */
    #toggleOptions(ul) {
        ul.classList.toggle('active');
    }

    /* choose option in the select box */
    #selectOption(event, li) {
        event.stopPropagation();
        const {target} = event;
        const oldValue = this.selectedValue;
        const newValue = target.dataset.value;
        if (oldValue !== newValue) {
            this.selectedValue = newValue;
            if (oldValue) {
                let oldSelect = this.#getSelector('.selected');
                oldSelect.classList.remove('selected');
                target.classList.add('selected');
            } else target.classList.add('selected');
        }
    }

}

const options = [
    {value: 1, text: 'JavaScript'},
    {value: 2, text: 'NodeJS'},
    {value: 3, text: 'ReactJS'},
    {value: 4, text: 'HTML'},
    {value: 5, text: 'CSS'}
];

const select = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container');
select.render(mainContainer);