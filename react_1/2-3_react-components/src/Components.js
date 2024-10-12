import { Fragment } from 'react';

const getValue = () => 'function getValue()';
export const ComponentAndJSX = () => {
	const className = 'blockElement';
	const value = 123;
	const tagName = 'div';
	return (
		<Fragment>
			<label>Fragment</label>
			<div className="divElement"></div>
			<div className={tagName + 'Element'}>{getValue()}</div>
			<div
				className={className}
				style={{
					width: '300px',
					border: '1px solid red',
					marginTop: '20px',
					textAlign: 'center',
				}}
			>
				{'Fragment: Number by value in the block: ' + value}
			</div>
		</Fragment>
	);
};

export const ComponentWithNull = () => {
	return null;
};



