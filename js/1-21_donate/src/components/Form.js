import {Component} from '../core/Component';
import {create} from './Utils';
import {Button} from "./Button";
import {Input} from "./Input";
import {Label} from "./Label";
import {ListItem} from "./ListItem";
import moment from "moment";

export class Form extends Component {
    setup(props) {
        this.component = create('form');
        this.attribute('class', 'donate-form');
        const label = new Label({
            class: 'donate-form__input-label',
            text: 'Введите сумму в $',
            for: 'amount',
        });
        this.input = new Input({
            class: 'donate-form__donate-input',
            id: 'amount',
            name: 'amount',
            type: 'number',
            max: '100',
            min: '1',
            required: '',
            onInput: this.handleInput.bind(this),
        });

        this.button = new Button({
            class: 'donate-form__submit-button',
            disabled: true,
            type: 'submit',
            text: 'Задонатидь',
        });
        this.component.addEventListener('submit', this.handleSubmit.bind(this));
        this.component.append(label.component, this.input.component, this.button.component);
    }

    handleInput(event) {
        let value = +event.target.value;
        let min = +this.input.getFieldProps('min');
        let max = +this.input.getFieldProps('max');
        if (!value || !(value >= min && value <= max))
            this.button.setFieldComponent('disabled', '');
        else this.button.component.removeAttribute('disabled');
    }

    handleSubmit(event) {
        event.preventDefault();
        let amount = +this.input.getFieldComponent('value');

        if (amount > 0) {
            const item = new ListItem({
                class: 'donate-item',
            });
            item.setFieldState('amount', amount);
            item.setFieldState('time', moment().format('DD/MM/YYYY, HH:mm:ss'));
            item.updateState();
            this.getFieldProps('donateList').addItem(item);

            this.input.setFieldComponent('value', '');
        }
    }


}
