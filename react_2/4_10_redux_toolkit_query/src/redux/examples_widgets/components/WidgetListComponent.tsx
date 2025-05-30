import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getWidgets, selectWidgets } from '../widgetsSlice';

const WidgetList = () => {
	const dispatch = useAppDispatch();
	const { items, loading, error } = useAppSelector(selectWidgets);

	//call when mounting this component. only one time during load component
	useEffect(() => {
		dispatch(getWidgets());
	}, [dispatch]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<ul>
			{items.map(widget => (
				<li key={widget.id}>{widget.name}</li>
			))}
		</ul>
	);
};
