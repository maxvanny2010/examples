import {Component} from '../core/Component';
import {create} from './Utils';

export class Label extends Component {
    setup(props) {
        this.component = create('label');
        this.attribute('class', this.getFieldProps('class'));
        this.attribute('for', this.getFieldProps('for'));
        this.setText = this.getFieldProps('text');
    }
}