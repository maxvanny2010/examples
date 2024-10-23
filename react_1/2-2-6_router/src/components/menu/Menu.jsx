import styles from './Menu.module.css';
import { ExtendedLink } from '../extendedlink/ExtendedLink.jsx';

export const Menu = () => {
	return (
		<nav className={styles.menu}>
			<ExtendedLink to={'/'}>Home</ExtendedLink>
			<ExtendedLink to="/catalog">Catalog</ExtendedLink>
			<ExtendedLink to="/catalogAsync">CatalogAsync</ExtendedLink>
			<ExtendedLink to="/contacts">Contacts</ExtendedLink>
		</nav>
	);
};



