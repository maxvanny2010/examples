import {Component} from '../core/Component';
import {create, node, text} from './Utils';

export class ListItem extends Component {
    setup(props) {
        this.setFieldState('amount', 0);
        this.getFieldState('time', 'dd/MM/YYYY, HH:mm:ss');
        this.component = create('div');
        this.attribute('class', this.getFieldProps('class'));
    }

    updateState() {
        const amount = this.getFieldState('amount');
        const time = this.getFieldState('time');
        if (amount && time) {
            const bold = create('b');
            text(bold, `$${amount}`);
            this.component.appendChild(node(`${time} - `));
            this.component.appendChild(bold);
        }
    }


}
