import React from 'react';

const products = [
	{ id: '001', name: 'Teapot' },
	{ id: '002', name: 'Iron' },
];
export const ComponentListRender = () => {
	const [list, setList] = React.useState([]);
	return (
		<div style={{ width: '300px', border: '1px solid blue' }}>
			List with not mutable index:
			<ul>
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
