import { products, selectors } from './constants.js';
import { populateProductCard, renderCartTotal } from './renderer.js';
import { calcCartTotal } from './calc.js';

export function addHandlers(card) {
	card.querySelector(selectors.increaseQuantityButton).addEventListener('click', handleIncreaseQuantity);
	card.querySelector(selectors.decreaseQuantityButton).addEventListener('click', handleDecreaseQuantity);
}

function handleIncreaseQuantity(e) {
	const card = e.target.closest(selectors.product);
	const id = Number(card.dataset.id);
	const product = products.find(p => p.id === id);

	if (!product) {
		return;
	}

	product.quantity += 1;
	populateProductCard(product, card);
	renderCartTotal(calcCartTotal(products));
}

function handleDecreaseQuantity(e) {
	const card = e.target.closest(selectors.product);
	const id = Number(card.dataset.id);
	const product = products.find(p => p.id === id);

	if (product && product.quantity === 0) {
		return;
	}

	product.quantity -= 1;
	populateProductCard(product, card);
	renderCartTotal(calcCartTotal(products));
}
