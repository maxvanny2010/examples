/*import {
    getTodayDateFormat,
    getPreciseDateDifference
} from '../core/utils/date';*/
import * as DateUtils from '../core/utils/date';
import {Block} from "./block";

DateUtils.getTodayDateFormat();
DateUtils.getPreciseDateDifference();

export class TimerBlock extends Block {
    #date;
    #header;

    constructor(className, date) {
        super(className);
        this.#date = date;
        this.#header = document.createElement("h2");
    }

    #enableDateUpdate() {
        setInterval(() => {
            this.#header.textContent = this.#getTimerContent();
        }, 1000);
    }

    #getTimerContent() {
        return DateUtils.getPreciseDateDifference(new Date(), this.#date);
    }

    render() {
        this.container.id = 'timer';
        this.#header.classList.add("timer-text");
        this.#header.textContent = this.#getTimerContent();

        const todayDateHTML = document.createElement('div');
        todayDateHTML.classList.add("today-date");
        let todayDateFormat = DateUtils.getTodayDateFormat(new Date());
        todayDateHTML.textContent = `Today: ${todayDateFormat}`;

        this.container.append(this.#header, todayDateHTML);
        this.#enableDateUpdate();
        return this.container;

    }
}