import {Component} from '../core/Component';

export class List extends Component {
    setup() {
        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'donates-container';

        const $heading = document.createElement('h2');
        $heading.className = 'donates-container__title';
        $heading.textContent = 'Список донатов';
        this.$rootElement.appendChild($heading);

        const $listContainer = document.createElement('div');
        $listContainer.className = 'donates-container__donates';
        this.$listContainer = $listContainer;
        this.$rootElement.appendChild($listContainer);

        this.$rootElement.addEventListener('click', this.handleRemove.bind(this));
    }

    addItem(item) {
        this.$listContainer.appendChild(item.$rootElement);
    }

    removeItem(id) {
        this.$listContainer.querySelector(`.donate-item[data-id="${id}"]`).remove();
    }

    handleRemove(event) {
        if (event.target.classList.contains('delete-button')) {
            const id = Number(event.target.closest('.donate-item').dataset.id);
            this.props.onRemove(id);
        }
    }
}