import { renderCartTotal, renderProduct } from './renderer.js';
import { store } from './store.js';
import { autorun } from '../node_modules/mobx/dist/mobx.esm.development.js';

autorun(
	() => {
		console.log('render');
		store.products.forEach(renderProduct);
	},
);

autorun(() => {
	console.log('total');
	renderCartTotal(store.total);
});

document.querySelector('.header').addEventListener('click', () => {
	store.increaseHeaderClicks();
	console.log(store.headerClicks);
});




