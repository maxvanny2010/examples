import React from 'react';
import app from '../styles/App.module.css';
import style from '../styles/ComponentListRender.module.css';

const products = [
	{ id: '001', name: 'Teapot' },
	{ id: '002', name: 'Iron' },
];
export const ComponentListRender = () => {
	const [list, setList] = React.useState([]);
	return (
		<div className={`${app.block} ${style.color}`}>
			List with immutable index:
			<hr className={style.hr} />
			<ul className={style.ul}>
				{products.map(({ id, name }, INDEX) => (
					// don't use. the index mutable.
					// https://codesandbox.io/s/key-s-peredachey-index-i-bez-nego-nby2cx
					// <li key={INDEX}>{INDEX + ' : ' + name}</li>
					<li key={id}>{id + ' : ' + name}</li>
				))}
			</ul>
		</div>
	);
};
