import { useReducer, useRef, useState } from 'react';


const [count, setCount] = useState(0);
const incrementAsync = () => {
	setTimeout(() => {
		setCount(prevCount => prevCount + 1); // Используем актуальное значение
	}, 1000);
};
/*******************************************************************/
const [data, setData] = useState(null);
const dataRef = useRef(data);

// Обновляем `ref`, когда `data` изменяется
/*
useEffect(() => {
	dataRef.current = data;
}, [data]);
*/

const fetchData = async () => {
	const response = await fetch('https://api.example.com/data');
	const result = await response.json();

	// Сразу обновляем ref перед изменением состояния
	dataRef.current = result;
	setData(result);

	console.log(dataRef.current); // Теперь тут актуальные данные!
};

/*******************************************************************/
const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'set':
			return { count: action.payload };
		default:
			return state;
	}
};

const [state, dispatch] = useReducer(reducer, { count: 0 });

const incrementAsync = () => {
	setTimeout(() => {
		dispatch({ type: 'increment' }); // `useReducer` всегда работает с актуальным состоянием
	}, 1000);
};
