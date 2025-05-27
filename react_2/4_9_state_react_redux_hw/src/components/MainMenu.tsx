import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const MainMenu = () => {
	return (
		<Navbar bg="light"
				expand="lg">
			<Container>
				<Navbar.Brand href="/"><h1>Book Contacts</h1></Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="/groups">Groups</Nav.Link>
					<Nav.Link href="/favorit">Favorite</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};
