export default async function LoginPage() {
	await new Promise(resolve => setTimeout(resolve, 300));

	return (
		<div className="container-card">
			<h1 className="page-title">Login demo Page</h1>
			<p className="text-gray-600">Login page without form</p>
		</div>
	);
}
