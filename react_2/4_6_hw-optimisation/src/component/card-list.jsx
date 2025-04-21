import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { CardBlock } from './';
import ErrorBoundary from '../boundary/ErrorBoundary.jsx';

export const CardList = forwardRef(({ items, renderItem }, ref) => {
	return (
		<CardBlock>
			{items.map((item, index) => {
				const attachRef = index === items.length - 1;
				return (
					<ErrorBoundary key={item.id}>
						{renderItem(item, attachRef ? ref : null)}
					</ErrorBoundary>
				);
			})}
		</CardBlock>
	);
});

CardList.displayName = 'CardList';

CardList.propTypes = {
	items: PropTypes.array.isRequired,
	renderItem: PropTypes.func.isRequired,
};
