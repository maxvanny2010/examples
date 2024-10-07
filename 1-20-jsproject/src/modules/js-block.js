import JS_IMAGE from '../../assets/js.png'
import {Block} from "./block";

export class JSBlock extends Block{

    constructor(className) {
        super(className);
    }

    render() {
        const mainTitle = document.createElement('h1');
        mainTitle.classList.add("main-title");
        mainTitle.textContent = 'JavaScript';

        const JSImageHTML = document.createElement('img');
        JSImageHTML.classList.add('js-image');
        JSImageHTML.src = `${JS_IMAGE}`;

        const foundedText = document.createElement('p');
        foundedText.classList.add('founded-text');
        foundedText.textContent = 'C момента созадания JavaScript прошло';

        this.container.append(mainTitle, JSImageHTML, foundedText);
        return this.container;
    }
}