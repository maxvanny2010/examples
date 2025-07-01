import { Provider } from 'react-redux';
import { createTestStore } from './createTestStore';
import React from 'react';

type Props = {
	children: React.ReactNode
}

export const JestStoreProvider = ({ children }: Props) => {
	const store = createTestStore();
	return <Provider store={store}>{children}</Provider>;
};
