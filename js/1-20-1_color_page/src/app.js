import {getRandomColor} from "./utils";

export default function initApp() {
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Change color page';
    document.body.appendChild(button);
    document.body.style.backgroundColor = getRandomColor();
    button.addEventListener('click', (e) => {
        console.log(getRandomColor());
        document.body.style.backgroundColor = getRandomColor();
    })
}
