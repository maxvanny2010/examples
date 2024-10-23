import { Navigate, NavLink, useRoutes } from 'react-router-dom';
import { Catalog } from './components/catalog/Catalog.jsx';
import { Product } from './components/product/Product.jsx';
import { Home } from './components/home/Home.jsx';
import { ProductLoadError } from './components/loadederror/ProductLoadError.jsx';
import { PageNotFound } from './components/404/PageNotFound.jsx';
import { Contact } from './components/contact/Contact.jsx';

export const App = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{
			path: '/catalog',
			element: <Catalog />,
			children: [
				{ path: 'product/:id', element: <Product /> },
				{ path: 'product/:id', element: <Product /> },
			],
		},
		{ path: '/contacts', element: <Contact /> },
		{ path: '/product-load-error', element: <ProductLoadError /> },
		{ path: '/404', element: <PageNotFound /> },
		{ path: '*', element: <Navigate to="/404" /> },
	]);

	return (
		<div>
			<div>
				<h3>Menu</h3>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/catalog">Catalog</NavLink>
					</li>
					<li>
						<NavLink to="/contacts"
								 onClick={console.log}>
							Contacts
						</NavLink>
					</li>
				</ul>
			</div>
			{routes}
		</div>
	);
};
