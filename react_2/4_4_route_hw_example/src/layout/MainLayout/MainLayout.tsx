import React from 'react';
import styles from './MainLayout.module.css';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';

export function MainLayout() {
	return (
		<div className={styles.root}>
			<Header />
			<Outlet />
		</div>
	);
}
