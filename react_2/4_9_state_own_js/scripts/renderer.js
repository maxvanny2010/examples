import { selectors } from './constants.js';
import { round } from './utils.js';
import { addHandlers } from './handlers.js';

const cart = document.querySelector(selectors.cart);
const productTemplate = document
	.querySelector(selectors.productTemplate)
	.content
	.querySelector(selectors.product);
const cartSubtotal = document.querySelector(selectors.subtotal);
const cartTax = document.querySelector(selectors.salestax);
const cartTotal = document.querySelector(selectors.total);

export function renderProduct(product) {
	const productCard = productTemplate.cloneNode(true);

	productCard.dataset.id = product.id;
	populateProductCard(product, productCard);
	addHandlers(productCard);

	cart.appendChild(productCard);
}

export function populateProductCard(product, cardElement) {
	cardElement.querySelector(selectors.productName).textContent = product.name;
	cardElement.querySelector(selectors.productPreview).src = product.image;
	cardElement.querySelector(selectors.productQuantity).textContent = 'x' + product.quantity;
	cardElement.querySelector(selectors.productPrice).textContent = '$ ' + product.price;
}

export function renderCartTotal(total) {
	cartSubtotal.textContent = '$ ' + round(total.subtotal);
	cartTax.textContent = '$ ' + round(total.tax);
	cartTotal.textContent = '$ ' + round(total.total);
}
