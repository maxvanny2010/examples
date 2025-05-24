import { renderCartTotal, renderProduct } from './renderer.js';
import { calcCartTotal } from './calc.js';
import { store } from './redux/store.js';

store.subscribe(() => {
	console.log('update products');
	store.getState().products.forEach(renderProduct);
});

store.subscribe(() => {
	console.log('update total');
	renderCartTotal(
		calcCartTotal(store.getState().products),
	);
});

store.dispatch({ type: 'INIT' });




