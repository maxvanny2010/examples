import { GetServerSideProps } from 'next';

export default function Circle() {
	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<h1 className="text-4xl font-bold text-black mb-4 text-center">About This App</h1>
			<div className="max-w-3xl mx-auto text-left">
				<p className="text-lg text-gray-700">
					Empty page. It was created for relocated to Home page
				</p>
			</div>
		</div>
	);
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	ctx.res.statusCode = 307;

	return {
		redirect: {
			destination: '/',
			permanent: false,
		},
	};
};