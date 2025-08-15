export const EventCardSkeleton = () => {
	return (
		<div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden max-w-sm w-full animate-pulse">
			{/* Image Placeholder */}
			<div className="h-48 bg-slate-200"></div>

			<div className="p-5 flex flex-col flex-grow">
				{/* Date Placeholder */}
				<div className="h-3 w-1/3 bg-slate-200 rounded"></div>
				{/* Title Placeholder */}
				<div className="mt-3 h-6 w-3/4 bg-slate-200 rounded"></div>
				{/* Description Placeholder */}
				<div className="mt-4 space-y-2 flex-grow">
					<div className="h-4 bg-slate-200 rounded"></div>
					<div className="h-4 bg-slate-200 rounded"></div>
					<div className="h-4 w-5/6 bg-slate-200 rounded"></div>
				</div>
				{/* Footer Placeholder */}
				<div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
					<div className="h-10 w-28 bg-slate-200 rounded-lg"></div>
				</div>
			</div>
		</div>
	);
};