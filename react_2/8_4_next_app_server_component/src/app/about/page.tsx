export default function About() {
	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="min-h-screen bg-gray-100 p-6">
				<h1 className="text-4xl font-bold text-black mb-4 text-center">About This App</h1>
				<div className="max-w-3xl mx-auto text-left">
					<p className="text-lg text-gray-700">
						This is a simple Next.js app that displays "Star Wars" films fetched from the SWAPI API.
						<br />It also reads the local <code>package.json</code> file on the server side and displays it
						using a custom component.
					</p>
				</div>
			</div>
		</div>
	);
}
