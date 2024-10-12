import { Fragment } from 'react';
import app from '../styles/App.module.css';
import style from '../styles/Components.module.css';

const getValue = () => 'function getValue() and tagName + Element';
export const ComponentAndJSX = () => {
	const className = 'blockElement';
	const value = 123;
	const tagName = 'div';
	return (
		<Fragment>
			<div className={`${app.block} ${style.color}`}>
				< label> Fragment < /label>
				<hr className={style.hr} />
				<div className="divElement">className</div>
				<div className={tagName + 'Element'}>{getValue()}</div>
				<div
					className={className}
					style={{
						width: '300px',
						borderTop: '1px dotted red',
						marginTop: '20px',
						textAlign: 'center',
					}}
				>
					{'Fragment: Number by value in the block: ' + value}
				</div>
			</div>
		</Fragment>
	)
		;
};

export const ComponentWithNull = () => {
	return null;
};



