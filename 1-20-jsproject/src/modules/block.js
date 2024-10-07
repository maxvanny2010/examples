export class Block {
    #container;

    constructor(className) {
        this.#container = document.createElement("div");
        this.#container.classList.add(className);
    }

    get container() {
        return this.#container
    }

    render() {
        throw new Error('Cannot use parent class Block.');
    }
}