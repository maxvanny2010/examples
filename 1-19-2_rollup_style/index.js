import "./index.css";
import IMAGE from './assets/image.jpg';

console.log("Hello Rollup");
const img = document.createElement("img");
img.src = `${IMAGE}`;
const header = document.createElement('h1');
header.textContent = 'Hello Rollup';
header.appendChild(img);
document.body.appendChild(header);