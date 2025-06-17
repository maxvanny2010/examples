import { observer } from 'mobx-react-lite';
import { Product } from '../Product/Product';
import { productsStore } from '../store';

export const Cart = observer(() => {
	return (
		<ul className="cart">
			{productsStore.products.map(product => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</ul>
	);
});
