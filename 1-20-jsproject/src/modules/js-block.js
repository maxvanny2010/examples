import JS_IMAGE from '../../assets/js.png'
import {Block} from "./block";

export class JSBlock extends Block{

    constructor(className) {
        super(className);
    }

    render() {
        const header = document.createElement('h1');
        header.classList.add("main-title");
        header.textContent = 'JavaScript';

        const JSImageHTML = document.createElement('img');
        JSImageHTML.classList.add('js-image');
        JSImageHTML.src = `${JS_IMAGE}`;

        const foundedText = document.createElement('p');
        foundedText.classList.add('founded-text');
        foundedText.textContent = 'C момента созадания JavaScript прошло';

        this.container.append(header, JSImageHTML, foundedText);
        return this.container;
    }
}