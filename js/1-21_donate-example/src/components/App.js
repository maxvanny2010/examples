import {Component} from '../core/Component';
import {Form} from './Form';
import {List} from './List';
import {ListItem} from './ListItem';

export class App extends Component {
    get total() {
        return this.state.total;
    }

    set total(value) {
        this.state.total = value;
        this.$total.textContent = value;
    }

    setup(props) {
        this.state = {
            total: 0,
            donates: []
        };

        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'app';

        const $heading = document.createElement('h1');
        $heading.className = 'total-amount';
        $heading.textContent = 'Итого: $';
        this.$rootElement.appendChild($heading);

        const $total = document.createElement('span');
        $total.textContent = this.state.total;
        $heading.appendChild($total);
        this.$total = $total;


        const donateForm = new Form({onSubmit: this.onItemCreate.bind(this)});
        this.$rootElement.appendChild(donateForm.$rootElement);
        const donateList = new List({onRemove: this.onItemRemove.bind(this)});
        this.$rootElement.appendChild(donateList.$rootElement);
        this.donateList = donateList;
    }

    onItemCreate(amount) {
        const item = new ListItem({amount});
        this.state.donates.push(item);
        this.donateList.addItem(item);
        this.total += item.amount;
    }

    onItemRemove(id) {
        const itemIndex = this.state.donates.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            this.donateList.removeItem(id);
            this.total -= this.state.donates[itemIndex].amount;
            this.state.donates.splice(itemIndex, 1);
        }
    }
}
