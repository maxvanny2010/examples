import './index.css';
import App from './src/modules/app';
import {JSBlock} from "./src/modules/js-block";
import {TimerBlock} from "./src/modules/timer-block";
import {JS_CREATION_DATE} from "./src/core/constants/settings";
/*import { App as AppComponent } from './src/app';*/

const baseBlock = new JSBlock('js-block');
const timerBlock = new TimerBlock('timer', JS_CREATION_DATE);
const app = new App(baseBlock, timerBlock);
app.run();
console.log('__work__');
