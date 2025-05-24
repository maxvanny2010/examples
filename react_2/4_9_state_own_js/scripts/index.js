import { products } from './constants.js';
import { renderCartTotal, renderProduct } from './renderer.js';
import { calcCartTotal } from './calc.js';

products.forEach(renderProduct);
renderCartTotal(
	calcCartTotal(products),
);




