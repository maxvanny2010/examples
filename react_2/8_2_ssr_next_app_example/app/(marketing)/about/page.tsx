export default async function AboutPage() {
	await new Promise(resolve => setTimeout(resolve, 300));

	return (
		<div className="container-card">
			<h1 className="page-title">About Page</h1>
			<p className="text-gray-600">Here is information about our project.</p>
		</div>
	);
}
