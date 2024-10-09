import {Component} from '../core/Component';
import {create} from './Utils';

export class Button extends Component {
    setup(props) {
        this.component = create('button');
        this.attribute('class', this.getFieldProps('class'));

        this.attribute('type', this.getFieldProps('type'));
        if (this.getFieldProps('disabled')) this.attribute('disabled', '');
        this.setText = this.getFieldProps('text');
        this.component.addEventListener('click', this.getFieldProps('onClick'));

    }

}