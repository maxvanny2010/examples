import { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { SuspenseFallback } from './SuspenseFallback.jsx';
import ErrorBoundary from '../boundary/ErrorBoundary.jsx';

const componentMap = {
	Locations: lazy(() =>
		new Promise(resolve => setTimeout(resolve, 1000))
			.then(() => import('../pages/Locations.jsx')),
	),

	Episodes: lazy(() => import('../pages/Episodes.jsx')),
	Main: lazy(() => import('../pages/Main.jsx')),
	NotFound: lazy(() => import('../pages/NotFound.jsx')),
	SignIn: lazy(() => import('../pages/SingIn.jsx')),
	SignUp: lazy(() => import('../pages/SingUp.jsx')),
	Heroes: lazy(() => import('../pages/Heroes.jsx')),
	HeroDetail: lazy(() => import('../pages/HeroDetail.jsx')),
};


export function Component({ name, ...rest }) {
	const DynamicComponent = componentMap[name];
	if (!DynamicComponent) {
		return <div>❌ Unknown component: {name}</div>;
	}
	return (
		<ErrorBoundary>
			<Suspense fallback={<SuspenseFallback />}>
				<DynamicComponent {...rest} />
			</Suspense>
		</ErrorBoundary>
	);
}


Component.propTypes = {
	name: PropTypes.string,
};
