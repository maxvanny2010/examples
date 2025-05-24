import { selectors } from './constants.js';
import { store } from './redux/store.js';
import { decreaseQuantityActionCreator, increaseQuantityActionCreator } from './redux/actions.js';

export function addHandlers(card) {
	card.querySelector(selectors.increaseQuantityButton).addEventListener('click', handleIncreaseQuantity);
	card.querySelector(selectors.decreaseQuantityButton).addEventListener('click', handleDecreaseQuantity);
}

function handleIncreaseQuantity(e) {
	const card = e.target.closest(selectors.product);
	const id = Number(card.dataset.id);
	store.dispatch(increaseQuantityActionCreator(id));
}

function handleDecreaseQuantity(e) {
	const card = e.target.closest(selectors.product);
	const id = Number(card.dataset.id);
	store.dispatch(decreaseQuantityActionCreator(id));
}
