import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const MainMenu = () => {
	return (
		<Navbar bg="light"
				expand="lg"
				className="mb-2 shadow-sm rounded text-shadow"
		>
			<Container>
				<Navbar.Brand as={Link} to="/"><h1>Book Contacts</h1></Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link as={NavLink} to="/groups">Groups</Nav.Link>
					<Nav.Link as={NavLink} to="/favorit">Favorite</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};
