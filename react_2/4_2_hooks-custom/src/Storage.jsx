import './App.css';
import { useLocalStorage, useUpdateLogger } from './index.jsx';

export function Storage() {
	const [value, setValue] = useLocalStorage('name', '');
	useUpdateLogger(value);
	return (
		<div className="input-block">
			<h6>useStorage</h6>
				<input type="text"
					   value={value}
					   onChange={(e) => setValue(e.target.value)}>
				</input>
		</div>
	);
}
