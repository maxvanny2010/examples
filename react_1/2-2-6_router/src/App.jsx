import { Home } from './components/home/Home.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Catalog } from './components/catalog/Catalog.jsx';
import { Contact } from './components/contact/Contact.jsx';
import { Layout } from './components/layout/Layout.jsx';
import { Product } from './components/product/Product.jsx';
import { PageNotFound } from './components/404/PageNotFound.jsx';
import { ProductLoadError } from './components/loadederror/ProductLoadError.jsx';
import { ProductNotFound } from './components/productnotfound/ProductNotFound.jsx';
import { ProductAsync } from './components/productasync/ProductAsync.jsx';
import { CatalogAsync } from './components/catalogasync/CatalogAsync.jsx';

export default function App() {

	return (

		<Routes>
			<Route path="/"
				   element={<Layout />}>
				<Route index
					   element={<Home />} />
				<Route path="/catalog"
					   element={<Catalog />}>
					<Route path={'product/:id'}
						   element={<Product />} />
					<Route path={'service/:id'}
						   element={<Product />} />
				</Route>
				<Route path="/catalogAsync"
					   element={<CatalogAsync />}>
					<Route path={'products/:id'}
						   element={<ProductAsync />} />
				</Route>
				<Route path="/contacts"
					   element={<Contact />} />

				{/*<Route path={'*'}  element={<PageNotFound />} />*/}
				<Route path="/404"
					   element={<PageNotFound />} />
				<Route path={'*'}
					   element={<Navigate to="/404" />} />

				<Route path="products-loaded-error"
					   element={<ProductLoadError />} />
				<Route path="products-not-exist"
					   element={<ProductNotFound />} />
			</Route>
		</Routes>

	);
};



