import { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

export const LoadingFallback = () => <div>⏳ Loading component...</div>;
const ComponentName = (name) => {
	return lazy(
		() => import(`../component/${name}.jsx`)
			.then(module => ({ default: module[name] })),
	);
};

export function Component({ name, ...rest }) {
	const DynamicComponent = ComponentName(name);
	return (
		<Suspense fallback={<LoadingFallback />}>
			<DynamicComponent {...rest} />
		</Suspense>
	);
}

Component.propTypes = {
	name: PropTypes.string.isRequired,
};
