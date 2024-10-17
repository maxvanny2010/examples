import Select from 'react-select';
import styles from './SelectReact.module.css';
import style from '../../index.module.css';

const customStyles = {
	control: (provided) => ({
		...provided,
		backgroundColor: 'black',
		borderColor: '#555',
		color: 'white',
	}),
	menu: (provided) => ({
		...provided,
		backgroundColor: 'black',
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isSelected ? '#333' : 'black',
		color: state.isSelected ? 'white' : 'gray',
		'&:hover': {
			backgroundColor: '#444',
		},
	}),
	singleValue: (provided) => ({
		...provided,
		color: 'white',
	}),
	placeholder: (provided) => ({
		...provided,
		color: 'gray',
	}),
};
export const SelectReact = () => {
	const productOptions = [
		{ value: 'tv', label: 'TV' },
		{ value: 'smartphone', label: 'Smartphone' },
		{ value: 'laptop', label: 'Laptop' },
	];
	const colorOptions = [
		{ value: 'black', label: 'black' },
		{ value: 'white', label: 'white' },
		{ value: 'silver', label: 'silver' },
	];
	const options = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
	];
	return (
		<div className={style.block}>
			<label className={styles.label}>React Select</label>
			<Select
				styles={customStyles}
				options={productOptions}
				defaultValue={productOptions[0]} />
			<Select
				isMulty
				styles={customStyles}
				options={colorOptions}
				placeholder="Выберите опцию"
				defaultValue={[colorOptions[0], colorOptions[2]]} />
			<Select
				styles={customStyles}
				options={options}
				placeholder="Выберите опцию"
			/>
		</div>
	);
};
