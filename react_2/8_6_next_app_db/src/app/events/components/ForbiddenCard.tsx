'use client';
import { FC } from 'react';
import { AiOutlineWarning } from 'react-icons/ai';

export const ForbiddenCard: FC = () => (
	<div className="flex flex-col items-center justify-center h-96">
		<div className="flex flex-col items-center bg-background shadow-lg rounded-2xl p-6 max-w-sm border border-border">
			<AiOutlineWarning className="text-5xl text-yellow-500 mb-4" />
			<h2 className="text-xl font-semibold text-foreground">Access denied.</h2>
			<p className="text-muted-foreground mt-2 text-center">
				This page is available to administrators only.
			</p>
		</div>
	</div>
);