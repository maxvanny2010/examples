import {Component} from '../core/Component';
import {create, text} from './Utils';
import {Form} from './Form';
import {List} from './List';

export class App extends Component {
    setup(props) {
        this.component = create('div');
        this.attribute('class', 'app');

        const header = create('h1');
        const headerSpan = create('span');
        header.setAttribute('class', 'total-amount');
        text(headerSpan, '0');
        text(header, 'Итого:');
        header.textContent += text(headerSpan);
        this.component.appendChild(header);

        const donateList = new List();
        const donateForm = new Form({donateList: donateList});
        this.component.appendChild(donateForm.component);
        this.component.appendChild(donateList.component);
    }

}
