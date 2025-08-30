'use client';

import { FC } from 'react';


const CalendarIconSkeleton: FC = () => <div className="h-5 w-5 bg-muted rounded" />;
const UsersIconSkeleton: FC = () => <div className="h-6 w-6 bg-muted rounded-full" />;

export const SkeletonEventDetail: FC = () => (
	<main className="min-h-screen bg-background font-sans antialiased animate-pulse">
		<div className="container mx-auto px-4 py-12 sm:py-16">
			<article className="max-w-5xl mx-auto bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
				<div className="grid grid-cols-1 lg:grid-cols-5">
					<div className="lg:col-span-2">
						<div className="w-full h-64 lg:h-full bg-muted"></div>
					</div>
					<div className="lg:col-span-3 p-8 md:p-12 flex flex-col gap-8">
						<header className="flex flex-col gap-4">
							<div className="h-10 md:h-12 w-3/4 bg-muted rounded-md"></div>
							<div className="flex items-center gap-2">
								<CalendarIconSkeleton />
								<div className="h-5 w-1/2 bg-muted rounded-md"></div>
							</div>
						</header>
						<div className="space-y-3">
							<div className="h-4 bg-muted rounded"></div>
							<div className="h-4 bg-muted rounded"></div>
							<div className="h-4 w-5/6 bg-muted rounded"></div>
						</div>
						<section>
							<div className="flex items-center gap-3 mb-6">
								<UsersIconSkeleton />
								<div className="h-7 w-1/3 bg-muted rounded-md"></div>
							</div>
							<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{Array.from({ length: 4 }).map((_, i) => (
									<li key={i}
										className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full bg-muted shrink-0"></div>
										<div className="h-5 w-full bg-muted rounded-md"></div>
									</li>
								))}
							</ul>
						</section>
					</div>
				</div>
			</article>
		</div>
	</main>
);