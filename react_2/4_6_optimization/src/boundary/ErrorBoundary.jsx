import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		// update state for next render to show a fallback UI
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return <h2>Something happened. Try again later.</h2>;
		}
		return this.props.children;
	}

	componentDidCatch(error, errorInfo) {
		// a log to logging mistake system
		console.error('Error caught by ErrorBoundary:', error, errorInfo);
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
