export default class App {
    #jsBlock;
    #timerBlock;

    constructor(headerBlock, timer) {
        this.#timerBlock = timer;
        this.#jsBlock = headerBlock;
    }

    run() {
        const jsBlockHTML = this.#jsBlock.render();
        const timerBlockHTML = this.#timerBlock.render();
        document.body.append(jsBlockHTML, timerBlockHTML);
    }
}
