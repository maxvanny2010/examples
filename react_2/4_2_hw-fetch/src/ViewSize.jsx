import { useViewportSize } from './useViewportSize.jsx';

export function ViewSize() {
	const { height, width } = useViewportSize();

	return (
		<>
			Width: {width}, height: {height}
		</>
	);
}
