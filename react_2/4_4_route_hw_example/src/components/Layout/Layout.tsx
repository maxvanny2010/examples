import React from 'react';
import cn from 'classnames';
import styles from './Layout.module.css';

interface LayoutProps {
	className?: string;
	children: React.ReactNode;
}

export function Layout({ children, className }: LayoutProps) {
	return (
		<div className={cn(styles.root, className)}>
			{children}
		</div>
	);
}
