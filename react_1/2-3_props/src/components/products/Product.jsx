import PropTypes from 'prop-types';
import { useState } from 'react';
import app from '../../App.module.css';
import styles from './Product.module.css';

export const Product = ({ name, price }) => {
	const [amount, setAmount] = useState(1);
	return (
		<div className={`${app.block} ${styles.color}`}>
			<div className={styles.h4}>Type variables Product</div>
			<div>{name} - {price}euro</div>
			<hr className={styles.hr} />
			<button className={styles.button}
					onClick={() => setAmount(amount + 1)}>
				Increment
			</button>
			<div>Amount: {amount}</div>
			<button className={styles.button}
					onClick={() => setAmount(amount - 1)}>
				Decrement
			</button>
		</div>
	);
	/*return <div>{name}-{price} euro</div>*/
};
Product.propTypes = {
	name: PropTypes.string,
	price: PropTypes.number,
};
