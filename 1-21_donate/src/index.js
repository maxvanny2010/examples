import './index.css';
import {App} from "./components/App";

document.addEventListener('DOMContentLoaded', function () {
    const app = new App({heading: 'Donate'});
    document.body.appendChild(app.component);
});