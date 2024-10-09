import {Component} from '../core/Component';

export class ListItem extends Component {
    get id() {
        return this.state.id;
    }

    get amount() {
        return this.state.amount;
    }

    setup(props) {
        this.state = {
            id: Date.now(),
            date: new Date(),
            amount: props.amount
        };

        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'donate-item';
        this.$rootElement.dataset.id = this.state.id;
        this.$rootElement.innerHTML = `${this.state.date.toLocaleString()} -&nbsp;<b>$${this.state.amount}</b>`;

        const $deleteButton = document.createElement('button');
        $deleteButton.className = 'delete-button';
        $deleteButton.textContent = 'Удалить'

        this.$rootElement.appendChild($deleteButton);
    }
}
