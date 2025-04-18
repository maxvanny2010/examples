export default function Page(pageNumber) {
	return (
		<ExampleComponent>
			{/*<title>Results page {pageNumber}</title> // ! not correct*/}
			<title>{`Results page ${pageNumber}`}</title> {/* correct*/}
			<meta name="author"
				  content="John Smith" />
			<meta name="keywords"
				  content="front-end, React, Vue" />
			<meta name="description"
				  content="content" />
			{/*itemProp  meta-data about this component not about page*/}
			<h1>Heading</h1>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
			<FirstComponent />
			<SecondComponent />
			<ThirdComponent />
		</ExampleComponent>
	);
}

function FirstComponent() {
	return <link rel="stylesheet"
				 href="../first.css"
				 precedence="first" />;
}

function SecondComponent() {
	return <link rel="stylesheet"
				 href="../second.css"
				 precedence="second" />;
}

function ThirdComponent() {
	return <link rel="stylesheet"
				 href="../third.css"
				 precedence="first" />;
}

function ExampleComponent(children) {
	return children;
}
