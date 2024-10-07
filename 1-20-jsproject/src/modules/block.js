export class Block {
    #container;

    constructor(className) {
        if (!className)  throw new Error('Cannot create parent class Block.');
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