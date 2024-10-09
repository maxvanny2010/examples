import {Component} from '../core/Component';

const initialAmount = '';

export class Form extends Component {
    get amount() {
        return this.state.amount;
    }

    set amount(value) {
        this.state.amount = Number(value);
        this.$input.value = value;
        this.$button.disabled = !this.isValid;
    }

    get isValid() {
        return !isNaN(this.amount) && this.amount >= 1 && this.amount <= 100;
    }

    setup(props) {
        this.state = {
            amount: initialAmount
        }

        this.$rootElement = document.createElement('form');
        this.$rootElement.className = 'donate-form';

        const $label = document.createElement('label');
        $label.className = 'donate-form__input-label';
        $label.textContent = 'Введите сумму в $';

        const $input = document.createElement('input');
        $input.className = 'donate-form__donate-input';
        $input.name = 'amount';
        $input.value = initialAmount;
        $input.type = 'number';
        $input.required = true;
        $input.min = 1;
        $input.max = 100;
        this.$input = $input;
        $label.appendChild($input);
        this.$rootElement.appendChild($label);

        const $button = document.createElement('button');
        $button.disabled = true;
        $button.className = 'donate-form__submit-button';
        $button.type = 'submit';
        $button.textContent = 'Задонатить';
        this.$button = $button;
        this.$rootElement.appendChild($button);

        $input.addEventListener('input', this.handleInput.bind(this));
        this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleInput(event) {
        this.amount = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.isValid) {
            this.props.onSubmit(Number(this.amount));
            this.amount = initialAmount;
        }
    }
}
