import Error from 'next/error';

// can add log
export default function PageError() {
	return <Error statusCode={404} />;
}