import {Component} from '../core/Component';
import {create} from './Utils';

export class Input extends Component {
    setup(props) {
        this.component = create('input');
        this.attribute('class', this.getFieldProps('class'));
        this.attribute('id', this.getFieldProps('id'));

        this.attribute('name', this.getFieldProps('name'));
        this.attribute('type', this.getFieldProps('type'));
        this.attribute('max', this.getFieldProps('max'));
        this.attribute('min', this.getFieldProps('min'));
        this.attribute('required', this.getFieldProps('required'));

        this.component.addEventListener('input', this.getFieldProps('onInput'));
    }
}
