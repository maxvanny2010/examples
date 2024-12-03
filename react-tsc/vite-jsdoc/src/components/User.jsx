/**
 * @typedef {Object} UserProps
 * @property {string} name - a name of user
 * @property {number} age - an age of user
 * @property {'male'|'female'} sex - a sex of user
 *
 */

import PropTypes from 'prop-types';

/**
 * User component.
 * @param {UserProps} props - props of component.
 * @returns {JSX.Element}
 * @example <User name="Max" age={35} sex="male" />
 */

export function User(props) {
	const { name, age, sex } = props;
	return (
		<div>
			<div>{name}</div>
			<div>{age}</div>
			<div>{sex}</div>
		</div>
	);
}

User.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	sex: PropTypes.oneOf(['male', 'female']).isRequired,
};