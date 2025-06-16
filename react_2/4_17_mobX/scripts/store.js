import { products } from './constants.js';
import { calcCartTotal } from './calc.js';
import { makeAutoObservable } from '../node_modules/mobx/dist/mobx.esm.development.js';

export const store = makeAutoObservable({
	products,
	headerClicks: 0,
	increaseHeaderClicks() {
		this.headerClicks++;
	},
	increaseQuantity(id) {
		const product = this.products.find(p => p.id === id);

		if (product) {
			product.quantity++;
		}
	},
	decreaseQuantity(id) {
		const product = this.products.find(p => p.id === id);

		if (product && product.quantity > 0) {
			product.quantity--;
		}
	},
	get total() {
		console.log(this.headerClicks);
		return calcCartTotal(this.products);
	},
});
