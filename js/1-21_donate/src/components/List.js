import {Component} from '../core/Component';
import {create, text} from './Utils';
import {Button} from "./Button";

export class List extends Component {
    setup() {
        this.setFieldState('total', 0);
        this.component = create('div');
        this.attribute('class', 'donates-container');

        const headerListBlock = create('h2');
        headerListBlock.setAttribute('class', 'donates-container__title');
        text(headerListBlock, 'Список донатов');
        const listBlock = create('div');
        listBlock.setAttribute('class', 'donates-container__donates');

        this.component.append(headerListBlock, listBlock);
    }

    addItem(item) {
        const button = this.getButtonDelete(item);

        const block = this.query('.donates-container__donates');
        item.component.append(button.component);
        block.append(item.component);

        const total = this.getFieldState('total');
        const amount = item.getFieldState('amount');
        this.setFieldState('total', total + amount);
        this.updateHeaderTotal();
    }

    getButtonDelete(item) {
        const button = new Button({
            class: 'delete-button',
            type: 'button',
            text: 'Удалить',
            onClick: this.removeItem.bind(this, item),
        });
        button.setFieldState('item', item);
        return button;
    }

    removeItem(item) {
        if (item && item.component) {
            const block = this.query('.donates-container__donates');
            block.removeChild(item.component);
            const timeDonate = text(item.component);
            let idx1 = timeDonate.indexOf('$') + 1;
            let idx2 = timeDonate.indexOf('У');
            const amount = +timeDonate.slice(idx1, idx2);
            const total = this.getFieldState('total');
            this.setFieldState('total', total - amount);
            this.updateHeaderTotal();
        }
    }

    updateHeaderTotal() {
        const total = this.getFieldState('total');
        let header = this.query('.total-amount');
        const headerTotal = text(header).slice(0, 6);
        text(header, headerTotal + total.toString());
    }

}