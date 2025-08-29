'use client';
import { BUTTON_EVENT_TYPE, ButtonEventType } from '@/shared/types';
import { ReactNode } from 'react';

interface ButtonEventActionProps {
	type: ButtonEventType;
	onClick: () => void;
	className?: string;
	children: ReactNode;
}

const BUTTON_CONFIG = {
	[BUTTON_EVENT_TYPE.CREATE]: { class: 'bg-green-600 hover:bg-green-700' },
	[BUTTON_EVENT_TYPE.EDIT]: { class: 'bg-blue-600 hover:bg-blue-700' },
	[BUTTON_EVENT_TYPE.DETAIL]: { class: 'bg-gray-600 hover:bg-gray-700' },
};

export default function ButtonEventAction({ type, onClick, children, className }: ButtonEventActionProps) {
	const { class: colorClass } = BUTTON_CONFIG[type];
	return (
		<button
			onClick={onClick}
			className={`btn ${className} ${colorClass} text-white px-3 py-1 rounded text-sm shadow-lg`}
		>
			{children}
		</button>
	);
}
