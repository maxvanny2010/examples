export default async function ContactPage() {
	await new Promise(resolve => setTimeout(resolve, 300));

	return (
		<div className="container-card">
			<h1 className="page-title">Contact Page</h1>
			<p className="text-gray-600">Call me please by phone or email.</p>
		</div>
	);
}
