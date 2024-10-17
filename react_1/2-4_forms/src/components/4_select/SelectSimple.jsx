import { useState } from 'react';
import style from '../../index.module.css';

export const SelectSimple = () => {
	const [selectedProduct, setSelectedProduct] = useState('tv');
	const [selectedColor, setSelectedColor] = useState(['green', 'blue']);
	const onSelectedProductChange = ({ target }) => {
		setSelectedProduct(target.value);
	};
	const onSelectedColorChange = ({ target }) => {
		const newSelectedColor = [...target.selectedOptions]
			.map((selectedOption) => selectedOption.value);
		setSelectedColor(newSelectedColor);
	};
	return (
		<div className={style.block}>
			<label>Select</label>
			<br />
			<select
				value={selectedProduct}
				onChange={onSelectedProductChange}
			>
				<option value="tv">TV</option>
				<option value="smartphone">Smartphone</option>
				<option value="laptop">Laptop</option>
			</select>
			<br />
			<select
				multiple={true}
				value={selectedColor}
				onChange={onSelectedColorChange}
			>
				<option value="black">black</option>
				<option value="green">green</option>
				<option value="blue">blue</option>
			</select>
		</div>
	);
};
